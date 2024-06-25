import React, { useState } from 'react';
import { View, Button, Image, Alert, TextInput, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { supabase } from '../../services/supabaseClient'; // Importe seu cliente Supabase aqui
import * as FileSystem from 'expo-file-system';

const CreatePost = () => {
  const [image, setImage] = useState(null);
  const [content, setContent] = useState('');
  const [postType, setPostType] = useState('');

  // Permite ao usuário selecionar uma imagem da biblioteca
  const handleImagePicker = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      console.log('image', result.assets[0])
      setImage(result.assets[0].uri);
    }
  };

  // Função para converter a imagem para um blob
  const uriToBlob = async (uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    return blob;
  };

  // Envia o post para o Supabase, incluindo a imagem selecionada
  const handlePost = async () => {
    if (!image) {
      Alert.alert('Erro', 'Nenhuma imagem selecionada.');
      return;
    }
  
    try {
      console.log(0)
      console.log(JSON.stringify(image))
      // Convertendo a imagem para blob
      const blob = await uriToBlob(image);
      console.log({blob})
  
      // Gerando um nome único para a imagem
      const imageName = `post-${Date.now()}.jpeg`;
  
      console.log(1)
      
      const { data: user, error: userErro } = await supabase.auth.getUser()
      console.warn({user, userErro})
      
      console.log(2)

      const { data: bucket, error: errorBucket } = await supabase.storage.getBucket('images')
      console.debug({bucket, errorBucket})
      
      console.log(3)

      // Upload da imagem para o Supabase Storage

      console.debug({imageName})
      const {data: imageData, error: errorImage } = await supabase.storage
        .from('images')
        .select('created_at')
        .upload(imageName, blob)
      console.warn({imageData, errorImage})

        console.log(4)
  
      // URL da imagem no Supabase Storage
      const { publicURL, error: urlError } = supabase.storage
        .from('images')
        .getPublicUrl(imageName);
  
      if (urlError) {
        throw urlError;
      }
  
      // Aqui você pode salvar os dados do post no banco de dados do Supabase
      const { data: userData, error: userError } = await supabase.auth.getUser();
  
      if (userError) {
        throw userError;
      }
  
      const userId = userData.user.id;
  
      const imageUrl = supabase
        .storage
        .from('images')
        .getPublicUrl(`public/${image.fileName}`).publicUrl;
        console.log({imageURL})

      const { error: postError } = await supabase
        .from('posts')
        .insert({
          user_id: supabase.auth.user().id,
          post_type: 'image',
          content: '',
          number: '12345',
          image_url: imageUrl,
          video_url: '',
          likes: '0',
          shares: '0'
        });

      if (postError) {
        throw postError;
      }
  
      Alert.alert('Sucesso', 'Post criado com sucesso!');
      setImage(''); // Limpa a imagem após o post ser criado com sucesso
      setContent(''); // Limpa o conteúdo após o post ser criado com sucesso
      setPostType(''); // Limpa o tipo de post após o post ser criado com sucesso
  
    } catch (error) {
      console.error('Erro ao enviar imagem para o Supabase:', error.message);
      Alert.alert('Envio', `Post Criado com sucesso!`);
    }
  };
  

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Tipo de Post"
        value={postType}
        onChangeText={setPostType}
      />
      <TextInput
        style={styles.input}
        placeholder="Conteúdo do Post"
        value={content}
        onChangeText={setContent}
      />
      <Button title="Selecionar Imagem" onPress={handleImagePicker} />
      {image && <Image source={{ uri: image }} style={styles.imagePreview} />}
      <Button title="Postar" onPress={handlePost} disabled={!image || !content || !postType} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  imagePreview: {
    width: 300,
    height: 300,
    marginTop: 20,
    resizeMode: 'cover',
    borderRadius: 10,
  },
});

export default CreatePost;

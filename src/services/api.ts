//import { MercadoPagoConfig, Preference } from 'mercadopago';
const { MercadoPagoConfig, Preference } = require('mercadopago');


const client = new MercadoPagoConfig({ accessToken: 'TEST-2268946808585804-052808-a09485f33dff714327d4172f64658f25-688029748', options: { timeout: 5000, idempotencyKey: 'abc' } });
const preference = new Preference(client);

const body = {
  items: [
    {
      id: '1',
      title: 'Assinatura',
      description: 'Assinatura Mensal',
      quantity: 1,
      currency_id: 'BRL',
      unit_price: 9.99,
    },
  ],
  back_urls: {
    success: 'http://192.168.80.199:8082/Sucess.html',
    failure: 'http://192.168.80.199:8082/failed.html',
    pending: 'http://192.168.80.199:8082/failed.html',
  },
};


const response = await preference.create({ body })
  .then(console.log).catch(console.log);
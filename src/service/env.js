const config =  {
  dev: {
    host: '',
    h5Url: '',
    apiUrl: '',
    payUrl: ''
  },
  product: {
    host: '',
    h5Url: '',
    apiUrl: '',
    payUrl: ''
  }
}

const isProduct = location.host.indexOf(config.product.host) !== -1;
const env = isProduct ? 'product': 'dev';

export default config[env];
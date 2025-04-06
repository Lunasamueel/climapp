import 'dotenv/config';

export default {
  expo: {
    name: 'climapp',
    slug: 'climapp',
    version: '1.0.0',
    extra: {
      API_KEY: process.env.API_KEY,
    },
  },
};

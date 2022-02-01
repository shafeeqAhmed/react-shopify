# Distil shopify embedded app

# How to start staging env
1. run  `ngrok http 3005`
2. paste ngrok address to `APP_URL` in `stagingGlobalConstants`
3. paste ngrok address to shopify dev app 
https://partners.shopify.com/1980593/apps/6185001/edit
in 'App URL' and 'Allowed redirection URL(s)'
4. run React app with staging env `npm run start-staging`

# Install dev app to the shop
1. Go to the `https://partners.shopify.com/1980593/apps/6185001`.
2. Click 'Test on dev store' and choose store
3. Test
4. Uninstall app if need to test auth again

# Running application on the local
1. Go to the root directory.
2. Please run `yarn install`.
2. After that, run `yarn start`
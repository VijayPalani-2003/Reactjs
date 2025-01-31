  export NODE_ENV=development && sudo apt-get install psmisc && npm install;
  fuser -k 8000/tcp;
  fuser -k 8001/tcp;
  rm -rf ./report/* && npm run json-server & npm run test2e;
  mv ./report/*App.test.xml ./report/e2e.xml;
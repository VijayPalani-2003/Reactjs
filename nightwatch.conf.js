module.exports = {
  src_folders: ["test"],
  output_folder: "report",

  webdriver: {
    start_process: true,
    server_path: require('chromedriver').path,
    port: 9515,
  },

  test_settings: {
    default: {
      launch_url: "http://localhost:8000",
      skip_testcases_on_fail: false,
      desiredCapabilities: {
        browserName: "chrome",
        javascriptEnabled: true,
        acceptSslCerts: true,
        chromeOptions: {
          args: ["window-size=1280,800", "--no-sandbox"],
        },
      },
    },
  },
};

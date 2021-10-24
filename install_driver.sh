#!/usr/bin/env bash

if [[ $(uname) == "Darwin" && $(uname -m) == "x86_64" ]];
then
  echo "Dowloading ChromeDriver for macOS x86_64"
  curl https://chromedriver.storage.googleapis.com/95.0.4638.17/chromedriver_mac64.zip > chromedriver_mac64.zip
  unzip chromedriver_mac64.zip -d .
  rm chromedriver_mac64.zip
  mv chromedriver /usr/local/bin/chromedriver
  echo "Done installing ChromeDriver"
  echo "You can now run the tests with `npm t`"
else
  echo "Please manually download the ChromeDriver and add it to PATH"
  echo "https://chromedriver.storage.googleapis.com"
fi

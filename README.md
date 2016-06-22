# ChloePortfolio
Portfolio Chloé Chanteperdrix 2016

## HOW TO INSTALL (if no dev environnement)

### Install Brew

    /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
    
### Install NVM with Brew

    brew update
    brew install nvm
    source $(brew --prefix nvm)/nvm.sh
    
    echo "source $(brew --prefix nvm)/nvm.sh" >> ~/.profile
    
### Install NPM with NVM

    nvm install stable
    
### Use NPM

    nvm use stable
    
## HOW TO LAUNCH PROJECT

### First time only

    npm i
    
### Serve with gulp

    gulp serve
    
You can access on http://localhost:3000

const BaseController = require('../../src/js/common/BaseController.js');

const config = require('./config.json');

class KioskController extends BaseController {
  constructor() {
    super({ path: config.path });
  }

  getRoot(req, res) {
    if (req.isAuthenticated()) {
      if (req.session.kioskMode != true) {
        res.render('confirm');
      } else {
        req.session.destroy();
        res.redirect('/')
      }
    } else {
      if ( req.session.kioskMode == true ) {
        res.render('login');
      } else {
        res.redirect('/')
      }
    }
  }

  postRoot(req, res) {
    req.redirect('/');
  }


  getEnable(req, res) {
    if ( req.session.kioskMode == true ) {
      res.redirect('/kiosk');
    } else {
      res.render('confirm');
    }
  }

  postRoot(req, res) {
    req.session.kioskMode = true;
    req.logout();
    res.redirect('/kiosk');
  }
}

module.exports = KioskController;

"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var navLoginBtns = document.querySelectorAll('[data-nav-login="val"]');
var navSignUpBtns = document.querySelectorAll('[data-nav-signup="val"]');
var nav = document.querySelector('[data-nav="val"]');
var popupClose = document.querySelector('[data-popup-close="val"]');
var popupLogin = document.querySelector('[data-popup="login"]');
var popupLoginBtn = document.querySelector('[data-popup-btn="val"]');
var brandsItems = document.querySelectorAll('[data-brands-item="val"]');
var brandShow = document.querySelector('[data-brand-main="val"]');
var brandDescriptionText = document.querySelector('[data-brand-description-text="val"]');
var brandSiteLink = document.querySelector('[data-brand-site-link="val"]');
var brandLicensesLink = document.querySelector('[data-brand-licenses-link="val"]');
var brandAchievements = document.querySelectorAll('[data-brand-achievements="val"]');
var brandBottomBtn = document.querySelector('[data-brand-btn="val"]'); // (data-brand-achievements='val')
// data-brand-description-text='val'
// data-brand-site-link

var brandArrow = document.querySelector('[data-brand-arrow="val"]');
var brandMoreBtn = document.querySelector('[data-brand-more="btn"]');
var brandMoreBtnText = document.querySelector('[data-brand-more="text"]');
var brandDescriptionMore = document.querySelector('[data-brand-description-more="val"]');
var brandDescriptionMoreWrapp = document.querySelector('[data-brand-description-more="wrapp"]');
var choiceBrandTrueflip = document.querySelector('[data-choice-trueflip="val"]');
var choiceBrandEmojino = document.querySelector('[data-choice-emojino="val"]');
var choiceBrandImgTrueflip = document.querySelector('[data-choice-img-trueflip="val"]');
var choiceBrandImgEmojino = document.querySelector('[data-choice-img-emojino="val"]');
var choiceBrands = document.querySelectorAll('[data-choice-brand="val"]');
var testimonialsContentWrapp = document.querySelector('[data-testimonials-content-wrapp="val"]');
var testimonialsContent = document.querySelector('[data-testimonials-content="val"]');
var testimonialsBtn = document.querySelector('[data-testimonials-btn="val"]');
var faqTitles = document.querySelectorAll('[data-faq-title="val"]');
var faqTextWrapps = document.querySelectorAll('[data-faq-text-wrapp="val"]');
var faqTexts = document.querySelectorAll('[data-faq-text="val"]');
var affiliateContactBtns = document.querySelectorAll('[data-affiliate-contact-btn="val"]');
var affiliateInput = document.querySelector('[data-affiliate-input="val"]');
var navItems = document.querySelectorAll('[data-nav-item="val"]'); // let brandImgMain= document.querySelector('[data-brand-main="val"]');
// let brandImgItems= document.querySelectorAll('[data-brands-item="val"]');

var brandDescriptionShow = false; // (data-brand-main='val')

var lpInfo;
var activePopupObj = 'login'; // Get json information

var getInfo = function getInfo() {
  fetch('./json/main.json').then(function (response) {
    return response.json();
  }).then(function (myJson) {
    lpInfo = myJson;
    window.lpInfo = myJson;
  });
};

getInfo(); // Open popup Login

var openPopupLogin = function openPopupLogin(btn) {
  activePopupObj = btn;
  popupLogin.classList.add('show');
  document.body.classList.add('show-popup');

  for (var key in lpInfo.popup[btn]) {
    var selector = document.querySelector("[data-popup-".concat(key, "=\"val\"]"));

    if (key === 'tflipHref' || key === 'emojinoHref') {
      selector.href = lpInfo.popup[btn][key];
    } else {
      selector.innerHTML = lpInfo.popup[btn][key];
    }
  }
};

window.addEventListener('scroll', function () {
  if (window.scrollY > 10) {
    nav.classList.add('fixed');
    nav.parentElement.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
    nav.parentElement.classList.remove('fixed');
  }
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  for (var _iterator = navLoginBtns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    var btn = _step.value;
    btn.addEventListener('click', function () {
      return openPopupLogin('login');
    });
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator.return != null) {
      _iterator.return();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}

var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = navSignUpBtns[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var _btn = _step2.value;

    _btn.addEventListener('click', function () {
      return openPopupLogin('signup');
    });
  } // Toogle login or signup

} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
      _iterator2.return();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}

popupLoginBtn.addEventListener('click', function () {
  return activePopupObj === 'login' ? openPopupLogin('signup') : openPopupLogin('login');
}); // Close popup Login

popupClose.addEventListener('click', function () {
  popupLogin.classList.remove('show');
  document.body.classList.remove('show-popup');
}); // brands

var _iteratorNormalCompletion3 = true;
var _didIteratorError3 = false;
var _iteratorError3 = undefined;

try {
  var _loop = function _loop() {
    var _step3$value = _slicedToArray(_step3.value, 2),
        i = _step3$value[0],
        item = _step3$value[1];

    item.addEventListener('click', function () {
      var value = item.attributes['data-brands'].nodeValue;
      brandShow.src = "".concat(value);

      if (window.innerWidth <= 1000 && window.innerWidth >= 730) {
        brandArrow.style.top = "".concat(item.offsetTop, "px");
      } else {
        brandArrow.style.left = "".concat(item.offsetLeft, "px");
      }
    });
  };

  for (var _iterator3 = brandsItems.entries()[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError3 = true;
  _iteratorError3 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
      _iterator3.return();
    }
  } finally {
    if (_didIteratorError3) {
      throw _iteratorError3;
    }
  }
}

brandMoreBtn.addEventListener('click', function () {
  var descriptionHeight = brandDescriptionMoreWrapp.clientHeight;
  brandDescriptionShow = !brandDescriptionShow;

  if (brandDescriptionShow) {
    brandDescriptionMore.style.height = "".concat(descriptionHeight + 50, "px");
    brandMoreBtn.classList.add('open');
    brandMoreBtnText.innerText = 'Hide';
  } else {
    brandDescriptionMore.style.height = "100px";
    brandMoreBtn.classList.remove('open');
    brandMoreBtnText.innerText = 'More';
  }
}); // Choice Brands

var _iteratorNormalCompletion4 = true;
var _didIteratorError4 = false;
var _iteratorError4 = undefined;

try {
  var _loop2 = function _loop2() {
    var brand = _step4.value;
    brand.addEventListener('click', function () {
      var brandName = 'trueflip';

      if (brand === choiceBrandEmojino || brand === choiceBrandImgEmojino) {
        brandName = 'emojino';
        choiceBrandTrueflip.classList.remove('-active');
        choiceBrandEmojino.classList.add('-active');
      } else {
        choiceBrandEmojino.classList.remove('-active');
        choiceBrandTrueflip.classList.add('-active');
      }

      var info = lpInfo.brands[brandName];
      console.log('info', info);
      brandShow.src = info.imgs[0].src;
      var _iteratorNormalCompletion8 = true;
      var _didIteratorError8 = false;
      var _iteratorError8 = undefined;

      try {
        for (var _iterator8 = info.imgs.entries()[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
          var _step8$value = _slicedToArray(_step8.value, 2),
              i = _step8$value[0],
              img = _step8$value[1];

          brandsItems[i].childNodes[0].src = img.src;
          brandsItems[i].attributes['data-brands'].value = img.src;
          brandDescriptionText.innerHTML = info.topDescripton;
          brandSiteLink.innerText = info.site.text;
          brandSiteLink.href = info.site.link;
          brandLicensesLink.href = info.license.link;
          brandLicensesLink.childNodes[0].src = info.license.src;
          brandBottomBtn.innerText = info.btn.text;
          brandBottomBtn.href = info.btn.link;
        }
      } catch (err) {
        _didIteratorError8 = true;
        _iteratorError8 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
            _iterator8.return();
          }
        } finally {
          if (_didIteratorError8) {
            throw _iteratorError8;
          }
        }
      }

      var _iteratorNormalCompletion9 = true;
      var _didIteratorError9 = false;
      var _iteratorError9 = undefined;

      try {
        for (var _iterator9 = brandAchievements[Symbol.iterator](), _step9; !(_iteratorNormalCompletion9 = (_step9 = _iterator9.next()).done); _iteratorNormalCompletion9 = true) {
          var achievement = _step9.value;

          if (brandName === 'emojino') {
            achievement.style.display = 'none';
          } else {
            achievement.style.display = 'block';
          }
        }
      } catch (err) {
        _didIteratorError9 = true;
        _iteratorError9 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion9 && _iterator9.return != null) {
            _iterator9.return();
          }
        } finally {
          if (_didIteratorError9) {
            throw _iteratorError9;
          }
        }
      }
    });
  };

  for (var _iterator4 = choiceBrands[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
    _loop2();
  } // Testimonials

} catch (err) {
  _didIteratorError4 = true;
  _iteratorError4 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
      _iterator4.return();
    }
  } finally {
    if (_didIteratorError4) {
      throw _iteratorError4;
    }
  }
}

testimonialsContentWrapp;
testimonialsContent;
var testimonialsOpen = false;
var testimonialsContentHeight = testimonialsContent.clientHeight;
testimonialsBtn.addEventListener('click', function () {
  testimonialsOpen = !testimonialsOpen;
  var testimonialsContentWrappHeight = testimonialsContentWrapp.clientHeight;

  if (testimonialsOpen) {
    testimonialsContent.style.height = testimonialsContentWrappHeight + 'px';
    testimonialsBtn.innerText = 'Hide';
  } else {
    testimonialsContent.style.height = testimonialsContentHeight + 'px';
    testimonialsBtn.innerText = 'Show More';
  }
}); // FAQ

var _iteratorNormalCompletion5 = true;
var _didIteratorError5 = false;
var _iteratorError5 = undefined;

try {
  var _loop3 = function _loop3() {
    var _step5$value = _slicedToArray(_step5.value, 2),
        i = _step5$value[0],
        title = _step5$value[1];

    title.addEventListener('click', function () {
      title.classList.toggle('active');

      if (title.classList.contains('active')) {
        var faqTextHeight = faqTexts[i].clientHeight;
        faqTextWrapps[i].style.height = faqTextHeight + 'px';
      } else {
        faqTextWrapps[i].style.height = '0px';
      }
    });
  };

  for (var _iterator5 = faqTitles.entries()[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
    _loop3();
  } // Affiliate

} catch (err) {
  _didIteratorError5 = true;
  _iteratorError5 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
      _iterator5.return();
    }
  } finally {
    if (_didIteratorError5) {
      throw _iteratorError5;
    }
  }
}

var _iteratorNormalCompletion6 = true;
var _didIteratorError6 = false;
var _iteratorError6 = undefined;

try {
  var _loop4 = function _loop4() {
    var contact = _step6.value;
    contact.addEventListener('click', function () {
      contact.childNodes[1].classList.remove('tooltip');
      console.log(contact.getAttribute('data-affiliate-contact'));
      affiliateInput.value = contact.getAttribute('data-affiliate-contact');
      affiliateInput.select();
      document.execCommand("copy"); // span tooltip

      contact.childNodes[1].classList.add('tooltip');
    });
  };

  for (var _iterator6 = affiliateContactBtns[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
    _loop4();
  } // Nav

} catch (err) {
  _didIteratorError6 = true;
  _iteratorError6 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
      _iterator6.return();
    }
  } finally {
    if (_didIteratorError6) {
      throw _iteratorError6;
    }
  }
}

var _iteratorNormalCompletion7 = true;
var _didIteratorError7 = false;
var _iteratorError7 = undefined;

try {
  var _loop5 = function _loop5() {
    var item = _step7.value;
    item.addEventListener('click', function () {
      var itemValue = item.getAttribute('data-nav');
      var navElem = document.querySelector("[data-".concat(itemValue, "=\"val\"]"));
      console.log('navElem', navElem);
      navElem.scrollIntoView({
        behavior: 'smooth'
      });
    });
  };

  for (var _iterator7 = navItems[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
    _loop5();
  } //- window.scrollTo(0,0)
  // .scrollIntoView({ behavior: 'smooth' })

} catch (err) {
  _didIteratorError7 = true;
  _iteratorError7 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
      _iterator7.return();
    }
  } finally {
    if (_didIteratorError7) {
      throw _iteratorError7;
    }
  }
}
"use strict";
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJzZWNvbmQuanMiXSwibmFtZXMiOlsibmF2TG9naW5CdG5zIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwibmF2U2lnblVwQnRucyIsIm5hdiIsInF1ZXJ5U2VsZWN0b3IiLCJwb3B1cENsb3NlIiwicG9wdXBMb2dpbiIsInBvcHVwTG9naW5CdG4iLCJicmFuZHNJdGVtcyIsImJyYW5kU2hvdyIsImJyYW5kRGVzY3JpcHRpb25UZXh0IiwiYnJhbmRTaXRlTGluayIsImJyYW5kTGljZW5zZXNMaW5rIiwiYnJhbmRBY2hpZXZlbWVudHMiLCJicmFuZEJvdHRvbUJ0biIsImJyYW5kQXJyb3ciLCJicmFuZE1vcmVCdG4iLCJicmFuZE1vcmVCdG5UZXh0IiwiYnJhbmREZXNjcmlwdGlvbk1vcmUiLCJicmFuZERlc2NyaXB0aW9uTW9yZVdyYXBwIiwiY2hvaWNlQnJhbmRUcnVlZmxpcCIsImNob2ljZUJyYW5kRW1vamlubyIsImNob2ljZUJyYW5kSW1nVHJ1ZWZsaXAiLCJjaG9pY2VCcmFuZEltZ0Vtb2ppbm8iLCJjaG9pY2VCcmFuZHMiLCJ0ZXN0aW1vbmlhbHNDb250ZW50V3JhcHAiLCJ0ZXN0aW1vbmlhbHNDb250ZW50IiwidGVzdGltb25pYWxzQnRuIiwiZmFxVGl0bGVzIiwiZmFxVGV4dFdyYXBwcyIsImZhcVRleHRzIiwiYWZmaWxpYXRlQ29udGFjdEJ0bnMiLCJhZmZpbGlhdGVJbnB1dCIsIm5hdkl0ZW1zIiwiYnJhbmREZXNjcmlwdGlvblNob3ciLCJscEluZm8iLCJhY3RpdmVQb3B1cE9iaiIsImdldEluZm8iLCJmZXRjaCIsInRoZW4iLCJyZXNwb25zZSIsImpzb24iLCJteUpzb24iLCJ3aW5kb3ciLCJvcGVuUG9wdXBMb2dpbiIsImJ0biIsImNsYXNzTGlzdCIsImFkZCIsImJvZHkiLCJrZXkiLCJwb3B1cCIsInNlbGVjdG9yIiwiaHJlZiIsImlubmVySFRNTCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxZIiwicGFyZW50RWxlbWVudCIsInJlbW92ZSIsImkiLCJpdGVtIiwidmFsdWUiLCJhdHRyaWJ1dGVzIiwibm9kZVZhbHVlIiwic3JjIiwiaW5uZXJXaWR0aCIsInN0eWxlIiwidG9wIiwib2Zmc2V0VG9wIiwibGVmdCIsIm9mZnNldExlZnQiLCJlbnRyaWVzIiwiZGVzY3JpcHRpb25IZWlnaHQiLCJjbGllbnRIZWlnaHQiLCJoZWlnaHQiLCJpbm5lclRleHQiLCJicmFuZCIsImJyYW5kTmFtZSIsImluZm8iLCJicmFuZHMiLCJjb25zb2xlIiwibG9nIiwiaW1ncyIsImltZyIsImNoaWxkTm9kZXMiLCJ0b3BEZXNjcmlwdG9uIiwic2l0ZSIsInRleHQiLCJsaW5rIiwibGljZW5zZSIsImFjaGlldmVtZW50IiwiZGlzcGxheSIsInRlc3RpbW9uaWFsc09wZW4iLCJ0ZXN0aW1vbmlhbHNDb250ZW50SGVpZ2h0IiwidGVzdGltb25pYWxzQ29udGVudFdyYXBwSGVpZ2h0IiwidGl0bGUiLCJ0b2dnbGUiLCJjb250YWlucyIsImZhcVRleHRIZWlnaHQiLCJjb250YWN0IiwiZ2V0QXR0cmlidXRlIiwic2VsZWN0IiwiZXhlY0NvbW1hbmQiLCJpdGVtVmFsdWUiLCJuYXZFbGVtIiwic2Nyb2xsSW50b1ZpZXciLCJiZWhhdmlvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQix3QkFBMUIsQ0FBbkI7QUFDQSxJQUFJQyxhQUFhLEdBQUdGLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIseUJBQTFCLENBQXBCO0FBQ0EsSUFBSUUsR0FBRyxHQUFHSCxRQUFRLENBQUNJLGFBQVQsQ0FBdUIsa0JBQXZCLENBQVY7QUFDQSxJQUFJQyxVQUFVLEdBQUdMLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QiwwQkFBdkIsQ0FBakI7QUFDQSxJQUFJRSxVQUFVLEdBQUdOLFFBQVEsQ0FBQ0ksYUFBVCxDQUF1QixzQkFBdkIsQ0FBakI7QUFDQSxJQUFJRyxhQUFhLEdBQUdQLFFB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Ozs7Ozs7Ozs7Ozs7Ozs7OztRQUNRNEIsSTtBQUNOQSxJQUFBQSxJQUFJLENBQUNMLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQUk7QUFFbEMsVUFBTWdELFNBQVMsR0FBRzNDLElBQUksQ0FBQ3dDLFlBQUwsQ0FBa0IsVUFBbEIsQ0FBbEI7QUFDQSxVQUFNSSxPQUFPLEdBQUd2RyxRQUFRLENBQUNJLGFBQVQsaUJBQWdDa0csU0FBaEMsZUFBaEI7QUFDQXZCLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJ1QixPQUF2QjtBQUNBQSxNQUFBQSxPQUFPLENBQUNDLGNBQVIsQ0FBdUI7QUFBRUMsUUFBQUEsUUFBUSxFQUFFO0FBQVosT0FBdkI7QUFFQSxLQVBEOzs7QUFERix3QkFBZ0J4RSxRQUFoQixtSUFBMEI7QUFBQTtBQVN6QixHLENBR0Q7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQy9QQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsibGV0IG5hdkxvZ2luQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5hdi1sb2dpbj1cInZhbFwiXScpO1xyXG5sZXQgbmF2U2lnblVwQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5hdi1zaWdudXA9XCJ2YWxcIl0nKTtcclxubGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5hdj1cInZhbFwiXScpO1xyXG5sZXQgcG9wdXBDbG9zZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBvcHVwLWNsb3NlPVwidmFsXCJdJyk7XHJcbmxldCBwb3B1cExvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcG9wdXA9XCJsb2dpblwiXScpO1xyXG5sZXQgcG9wdXBMb2dpbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXBvcHVwLWJ0bj1cInZhbFwiXScpO1xyXG5cclxubGV0IGJyYW5kc0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYnJhbmRzLWl0ZW09XCJ2YWxcIl0nKTtcclxubGV0IGJyYW5kU2hvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJyYW5kLW1haW49XCJ2YWxcIl0nKTtcclxubGV0IGJyYW5kRGVzY3JpcHRpb25UZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYnJhbmQtZGVzY3JpcHRpb24tdGV4dD1cInZhbFwiXScpO1xyXG5sZXQgYnJhbmRTaXRlTGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJyYW5kLXNpdGUtbGluaz1cInZhbFwiXScpO1xyXG5sZXQgYnJhbmRMaWNlbnNlc0xpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1icmFuZC1saWNlbnNlcy1saW5rPVwidmFsXCJdJyk7XHJcbmxldCBicmFuZEFjaGlldmVtZW50cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWJyYW5kLWFjaGlldmVtZW50cz1cInZhbFwiXScpO1xyXG5sZXQgYnJhbmRCb3R0b21CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1icmFuZC1idG49XCJ2YWxcIl0nKTtcclxuXHJcblxyXG4vLyAoZGF0YS1icmFuZC1hY2hpZXZlbWVudHM9J3ZhbCcpXHJcbi8vIGRhdGEtYnJhbmQtZGVzY3JpcHRpb24tdGV4dD0ndmFsJ1xyXG4vLyBkYXRhLWJyYW5kLXNpdGUtbGlua1xyXG5cclxubGV0IGJyYW5kQXJyb3cgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1icmFuZC1hcnJvdz1cInZhbFwiXScpO1xyXG5sZXQgYnJhbmRNb3JlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYnJhbmQtbW9yZT1cImJ0blwiXScpO1xyXG5sZXQgYnJhbmRNb3JlQnRuVGV4dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJyYW5kLW1vcmU9XCJ0ZXh0XCJdJyk7XHJcbmxldCBicmFuZERlc2NyaXB0aW9uTW9yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWJyYW5kLWRlc2NyaXB0aW9uLW1vcmU9XCJ2YWxcIl0nKTtcclxubGV0IGJyYW5kRGVzY3JpcHRpb25Nb3JlV3JhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1icmFuZC1kZXNjcmlwdGlvbi1tb3JlPVwid3JhcHBcIl0nKTtcclxuXHJcblxyXG5sZXQgY2hvaWNlQnJhbmRUcnVlZmxpcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNob2ljZS10cnVlZmxpcD1cInZhbFwiXScpO1xyXG5sZXQgY2hvaWNlQnJhbmRFbW9qaW5vID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtY2hvaWNlLWVtb2ppbm89XCJ2YWxcIl0nKTtcclxubGV0IGNob2ljZUJyYW5kSW1nVHJ1ZWZsaXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jaG9pY2UtaW1nLXRydWVmbGlwPVwidmFsXCJdJyk7XHJcbmxldCBjaG9pY2VCcmFuZEltZ0Vtb2ppbm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jaG9pY2UtaW1nLWVtb2ppbm89XCJ2YWxcIl0nKTtcclxubGV0IGNob2ljZUJyYW5kcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNob2ljZS1icmFuZD1cInZhbFwiXScpO1xyXG5cclxuXHJcbmxldCB0ZXN0aW1vbmlhbHNDb250ZW50V3JhcHAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZXN0aW1vbmlhbHMtY29udGVudC13cmFwcD1cInZhbFwiXScpO1xyXG5sZXQgdGVzdGltb25pYWxzQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXRlc3RpbW9uaWFscy1jb250ZW50PVwidmFsXCJdJyk7XHJcbmxldCB0ZXN0aW1vbmlhbHNCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS10ZXN0aW1vbmlhbHMtYnRuPVwidmFsXCJdJyk7XHJcblxyXG5sZXQgZmFxVGl0bGVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmFxLXRpdGxlPVwidmFsXCJdJyk7XHJcbmxldCBmYXFUZXh0V3JhcHBzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmFxLXRleHQtd3JhcHA9XCJ2YWxcIl0nKTtcclxubGV0IGZhcVRleHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZmFxLXRleHQ9XCJ2YWxcIl0nKTtcclxuXHJcbmxldCBhZmZpbGlhdGVDb250YWN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWFmZmlsaWF0ZS1jb250YWN0LWJ0bj1cInZhbFwiXScpO1xyXG5sZXQgYWZmaWxpYXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1hZmZpbGlhdGUtaW5wdXQ9XCJ2YWxcIl0nKTtcclxuXHJcbmxldCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5hdi1pdGVtPVwidmFsXCJdJyk7XHJcblxyXG5cclxuLy8gbGV0IGJyYW5kSW1nTWFpbj0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtYnJhbmQtbWFpbj1cInZhbFwiXScpO1xyXG4vLyBsZXQgYnJhbmRJbWdJdGVtcz0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtYnJhbmRzLWl0ZW09XCJ2YWxcIl0nKTtcclxuXHJcblxyXG5cclxubGV0IGJyYW5kRGVzY3JpcHRpb25TaG93ID0gZmFsc2U7XHJcbi8vIChkYXRhLWJyYW5kLW1haW49J3ZhbCcpXHJcblxyXG5sZXQgbHBJbmZvO1xyXG5sZXQgYWN0aXZlUG9wdXBPYmogPSAnbG9naW4nO1xyXG5cclxuLy8gR2V0IGpzb24gaW5mb3JtYXRpb25cclxubGV0IGdldEluZm8gPSAoKSA9PiB7XHJcbiAgZmV0Y2goJy4vanNvbi9tYWluLmpzb24nKVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7IHJldHVybiByZXNwb25zZS5qc29uKCkgfSlcclxuICAgIC50aGVuKChteUpzb24pID0+IHtcclxuICAgICAgbHBJbmZvID0gbXlKc29uO1xyXG4gICAgICB3aW5kb3cubHBJbmZvID0gbXlKc29uO1xyXG4gICAgfSk7XHJcbn1cclxuZ2V0SW5mbygpO1xyXG5cclxuLy8gT3BlbiBwb3B1cCBMb2dpblxyXG5sZXQgb3BlblBvcHVwTG9naW4gPSAoYnRuKSA9PiB7XHJcbiAgYWN0aXZlUG9wdXBPYmogPSBidG47XHJcbiAgcG9wdXBMb2dpbi5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdzaG93LXBvcHVwJyk7XHJcblxyXG4gIGZvciAoY29uc3Qga2V5IGluIGxwSW5mby5wb3B1cFtidG5dKSB7XHJcbiAgICBsZXQgc2VsZWN0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3B1cC0ke2tleX09XCJ2YWxcIl1gKTtcclxuICAgIGlmKGtleSA9PT0gJ3RmbGlwSHJlZicgfHwga2V5ID09PSAnZW1vamlub0hyZWYnKXtcclxuICAgICAgc2VsZWN0b3IuaHJlZiA9IGxwSW5mby5wb3B1cFtidG5dW2tleV07XHJcbiAgICB9ZWxzZXtcclxuICAgICAgc2VsZWN0b3IuaW5uZXJIVE1MID0gbHBJbmZvLnBvcHVwW2J0bl1ba2V5XTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCk9PntcclxuICBpZiAod2luZG93LnNjcm9sbFkgPiAxMCkge1xyXG4gICAgbmF2LmNsYXNzTGlzdC5hZGQoJ2ZpeGVkJyk7XHJcbiAgICBuYXYucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdmaXhlZCcpO1xyXG4gIH1lbHNle1xyXG4gICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2ZpeGVkJyk7XHJcbiAgICBuYXYucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdmaXhlZCcpO1xyXG4gIH1cclxufSlcclxuXHJcbmZvciAoY29uc3QgYnRuIG9mIG5hdkxvZ2luQnRucykge1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Qb3B1cExvZ2luKCdsb2dpbicpKTtcclxufVxyXG5cclxuZm9yIChjb25zdCBidG4gb2YgbmF2U2lnblVwQnRucykge1xyXG4gIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IG9wZW5Qb3B1cExvZ2luKCdzaWdudXAnKSk7XHJcbn1cclxuXHJcbi8vIFRvb2dsZSBsb2dpbiBvciBzaWdudXBcclxucG9wdXBMb2dpbkJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFjdGl2ZVBvcHVwT2JqID09PSAnbG9naW4nID8gb3BlblBvcHVwTG9naW4oJ3NpZ251cCcpIDogb3BlblBvcHVwTG9naW4oJ2xvZ2luJykpO1xyXG5cclxuXHJcbi8vIENsb3NlIHBvcHVwIExvZ2luXHJcbnBvcHVwQ2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcG9wdXBMb2dpbi5jbGFzc0xpc3QucmVtb3ZlKCdzaG93Jyk7XHJcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LXBvcHVwJyk7XHJcbn0pXHJcblxyXG4vLyBicmFuZHNcclxuZm9yIChjb25zdCBbaSwgaXRlbV0gb2YgYnJhbmRzSXRlbXMuZW50cmllcygpKSB7XHJcbiAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCB2YWx1ZSA9IGl0ZW0uYXR0cmlidXRlc1snZGF0YS1icmFuZHMnXS5ub2RlVmFsdWU7XHJcbiAgICBicmFuZFNob3cuc3JjID0gYCR7dmFsdWV9YDtcclxuXHJcbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPD0gMTAwMCAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSA3MzApIHtcclxuICAgICAgYnJhbmRBcnJvdy5zdHlsZS50b3AgPSBgJHtpdGVtLm9mZnNldFRvcH1weGA7XHJcbiAgICB9ZWxzZSB7XHJcbiAgICAgIGJyYW5kQXJyb3cuc3R5bGUubGVmdCA9IGAke2l0ZW0ub2Zmc2V0TGVmdH1weGA7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuYnJhbmRNb3JlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGxldCBkZXNjcmlwdGlvbkhlaWdodCA9IGJyYW5kRGVzY3JpcHRpb25Nb3JlV3JhcHAuY2xpZW50SGVpZ2h0O1xyXG4gIGJyYW5kRGVzY3JpcHRpb25TaG93ID0gIWJyYW5kRGVzY3JpcHRpb25TaG93O1xyXG4gIGlmIChicmFuZERlc2NyaXB0aW9uU2hvdykge1xyXG4gICAgYnJhbmREZXNjcmlwdGlvbk1vcmUuc3R5bGUuaGVpZ2h0ID0gYCR7ZGVzY3JpcHRpb25IZWlnaHQgKyA1MH1weGA7XHJcbiAgICBicmFuZE1vcmVCdG4uY2xhc3NMaXN0LmFkZCgnb3BlbicpO1xyXG4gICAgYnJhbmRNb3JlQnRuVGV4dC5pbm5lclRleHQgPSAnSGlkZSc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGJyYW5kRGVzY3JpcHRpb25Nb3JlLnN0eWxlLmhlaWdodCA9IGAxMDBweGA7XHJcbiAgICBicmFuZE1vcmVCdG4uY2xhc3NMaXN0LnJlbW92ZSgnb3BlbicpO1xyXG4gICAgYnJhbmRNb3JlQnRuVGV4dC5pbm5lclRleHQgPSAnTW9yZSc7XHJcbiAgfVxyXG59KVxyXG5cclxuLy8gQ2hvaWNlIEJyYW5kc1xyXG5mb3IgKGNvbnN0IGJyYW5kIG9mIGNob2ljZUJyYW5kcykge1xyXG4gIGJyYW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgIFxyXG5cclxuICAgIGxldCBicmFuZE5hbWUgPSAndHJ1ZWZsaXAnO1xyXG4gICAgaWYgKGJyYW5kID09PSBjaG9pY2VCcmFuZEVtb2ppbm8gfHwgYnJhbmQgPT09IGNob2ljZUJyYW5kSW1nRW1vamlubykge1xyXG4gICAgICBicmFuZE5hbWUgPSAnZW1vamlubyc7XHJcbiAgICAgIGNob2ljZUJyYW5kVHJ1ZWZsaXAuY2xhc3NMaXN0LnJlbW92ZSgnLWFjdGl2ZScpO1xyXG4gICAgICBjaG9pY2VCcmFuZEVtb2ppbm8uY2xhc3NMaXN0LmFkZCgnLWFjdGl2ZScpO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGNob2ljZUJyYW5kRW1vamluby5jbGFzc0xpc3QucmVtb3ZlKCctYWN0aXZlJyk7XHJcbiAgICAgIGNob2ljZUJyYW5kVHJ1ZWZsaXAuY2xhc3NMaXN0LmFkZCgnLWFjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGluZm8gPSBscEluZm8uYnJhbmRzW2JyYW5kTmFtZV07XHJcbiAgICBjb25zb2xlLmxvZygnaW5mbycsIGluZm8pO1xyXG5cclxuICAgIGJyYW5kU2hvdy5zcmMgPSBpbmZvLmltZ3NbMF0uc3JjO1xyXG4gICAgZm9yIChjb25zdCBbaSwgaW1nXSBvZiBpbmZvLmltZ3MuZW50cmllcygpKSB7XHJcbiAgICAgIGJyYW5kc0l0ZW1zW2ldLmNoaWxkTm9kZXNbMF0uc3JjID0gaW1nLnNyYztcclxuICAgICAgYnJhbmRzSXRlbXNbaV0uYXR0cmlidXRlc1snZGF0YS1icmFuZHMnXS52YWx1ZSA9IGltZy5zcmM7XHJcbiAgICAgIGJyYW5kRGVzY3JpcHRpb25UZXh0LmlubmVySFRNTCA9IGluZm8udG9wRGVzY3JpcHRvbjtcclxuICAgICAgYnJhbmRTaXRlTGluay5pbm5lclRleHQgPSBpbmZvLnNpdGUudGV4dDtcclxuICAgICAgYnJhbmRTaXRlTGluay5ocmVmID0gaW5mby5zaXRlLmxpbms7XHJcbiAgICAgIGJyYW5kTGljZW5zZXNMaW5rLmhyZWYgPSBpbmZvLmxpY2Vuc2UubGluaztcclxuICAgICAgYnJhbmRMaWNlbnNlc0xpbmsuY2hpbGROb2Rlc1swXS5zcmMgPSBpbmZvLmxpY2Vuc2Uuc3JjO1xyXG4gICAgICBicmFuZEJvdHRvbUJ0bi5pbm5lclRleHQgPSBpbmZvLmJ0bi50ZXh0O1xyXG4gICAgICBicmFuZEJvdHRvbUJ0bi5ocmVmID0gaW5mby5idG4ubGluaztcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGFjaGlldmVtZW50IG9mIGJyYW5kQWNoaWV2ZW1lbnRzKSB7XHJcbiAgICAgIGlmIChicmFuZE5hbWUgPT09ICdlbW9qaW5vJykge1xyXG4gICAgICAgIGFjaGlldmVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYWNoaWV2ZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfSlcclxufVxyXG5cclxuLy8gVGVzdGltb25pYWxzXHJcblxyXG50ZXN0aW1vbmlhbHNDb250ZW50V3JhcHBcclxudGVzdGltb25pYWxzQ29udGVudFxyXG5cclxubGV0IHRlc3RpbW9uaWFsc09wZW4gPSBmYWxzZTtcclxubGV0IHRlc3RpbW9uaWFsc0NvbnRlbnRIZWlnaHQgPSB0ZXN0aW1vbmlhbHNDb250ZW50LmNsaWVudEhlaWdodDtcclxuXHJcbnRlc3RpbW9uaWFsc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgdGVzdGltb25pYWxzT3BlbiA9ICF0ZXN0aW1vbmlhbHNPcGVuO1xyXG4gIGxldCB0ZXN0aW1vbmlhbHNDb250ZW50V3JhcHBIZWlnaHQgPSB0ZXN0aW1vbmlhbHNDb250ZW50V3JhcHAuY2xpZW50SGVpZ2h0O1xyXG4gIGlmKHRlc3RpbW9uaWFsc09wZW4pe1xyXG4gICAgdGVzdGltb25pYWxzQ29udGVudC5zdHlsZS5oZWlnaHQgPSB0ZXN0aW1vbmlhbHNDb250ZW50V3JhcHBIZWlnaHQgKyAncHgnO1xyXG4gICAgdGVzdGltb25pYWxzQnRuLmlubmVyVGV4dCA9ICdIaWRlJztcclxuICB9ZWxzZXtcclxuICAgIHRlc3RpbW9uaWFsc0NvbnRlbnQuc3R5bGUuaGVpZ2h0ID0gdGVzdGltb25pYWxzQ29udGVudEhlaWdodCArICdweCc7XHJcbiAgICB0ZXN0aW1vbmlhbHNCdG4uaW5uZXJUZXh0ID0gJ1Nob3cgTW9yZSc7XHJcbiAgfVxyXG59KTtcclxuXHJcbi8vIEZBUVxyXG5cclxuXHJcbmZvciAoY29uc3QgW2ksIHRpdGxlXSBvZiBmYXFUaXRsZXMuZW50cmllcygpKSB7XHJcblxyXG4gIHRpdGxlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgIHRpdGxlLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScpO1xyXG4gICAgaWYodGl0bGUuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSl7XHJcbiAgICAgIGNvbnN0IGZhcVRleHRIZWlnaHQgPSBmYXFUZXh0c1tpXS5jbGllbnRIZWlnaHQ7XHJcbiAgICAgIGZhcVRleHRXcmFwcHNbaV0uc3R5bGUuaGVpZ2h0ID0gZmFxVGV4dEhlaWdodCsncHgnO1xyXG4gICAgfWVsc2V7XHJcbiAgICAgIGZhcVRleHRXcmFwcHNbaV0uc3R5bGUuaGVpZ2h0ID0gJzBweCc7XHJcbiAgICB9XHJcblxyXG4gIH0pXHJcblxyXG59XHJcblxyXG4vLyBBZmZpbGlhdGVcclxuXHJcbmZvcihjb25zdCBjb250YWN0IG9mIGFmZmlsaWF0ZUNvbnRhY3RCdG5zKSB7XHJcbiAgY29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgICBjb250YWN0LmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LnJlbW92ZSgndG9vbHRpcCcpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNvbnRhY3QuZ2V0QXR0cmlidXRlKCdkYXRhLWFmZmlsaWF0ZS1jb250YWN0JykpO1xyXG4gICAgYWZmaWxpYXRlSW5wdXQudmFsdWUgPSBjb250YWN0LmdldEF0dHJpYnV0ZSgnZGF0YS1hZmZpbGlhdGUtY29udGFjdCcpO1xyXG4gICAgYWZmaWxpYXRlSW5wdXQuc2VsZWN0KCk7XHJcbiAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XHJcblxyXG4gICAgLy8gc3BhbiB0b29sdGlwXHJcbiAgICBjb250YWN0LmNoaWxkTm9kZXNbMV0uY2xhc3NMaXN0LmFkZCgndG9vbHRpcCcpO1xyXG4gICAgXHJcbiAgfSlcclxufVxyXG5cclxuLy8gTmF2XHJcbmZvcihsZXQgaXRlbSBvZiBuYXZJdGVtcykge1xyXG4gIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG5cclxuICAgY29uc3QgaXRlbVZhbHVlID0gaXRlbS5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmF2Jyk7XHJcbiAgIGNvbnN0IG5hdkVsZW0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS0ke2l0ZW1WYWx1ZX09XCJ2YWxcIl1gKTtcclxuICAgY29uc29sZS5sb2coJ25hdkVsZW0nLCBuYXZFbGVtKTtcclxuICAgbmF2RWxlbS5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcclxuXHJcbiAgfSlcclxufSBcclxuXHJcblxyXG4vLy0gd2luZG93LnNjcm9sbFRvKDAsMClcclxuLy8gLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnIH0pIiwiIl19

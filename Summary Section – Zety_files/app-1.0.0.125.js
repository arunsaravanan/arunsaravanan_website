if (location.href.indexOf('section') > -1) {
    location.href = '/build-resume';
}
var configLoaded = false;
var vendorBundleLoaded = false;
var packageLoaded;
var postGuestCreatedCalled = false;
var hideLoader = false;
var isRedirectDone = false;
var isAccUserCalled = false;
var isDeviceRegister = false;
var hiwAnimationLoaded = false;

window.RDL = window.RDL || {};
window.RDL.LowerVersionBroswer = false;
window.RDL.Paths = {};
window.RDL.Paths.BaseApiUrl = 'https://api-embedded-builder.livecareer.com/api/v1/';
window.RDL.Paths.BaseApiUrlV2 = 'https://api-qa-embedded-builder.livecareer.com/api/v2/';
window.RDL.Paths.BasePath = '/build-resume';
window.RDL.VisitorApiSetting = {};
window.RDL.PortalSettings = {};
window.RDL.Skins = {};
window.RDL.guestUserID = null;
window.RDL.segmentKey = '';
window.RDL.oldUrl = '/';
window.RDL.userId = null;
window.RDL.guestUserCreated = false;
window.RDL.loadedPageCalled = false;
window.RDL.PortalCode = "mpr";
window.RDL.templateid = "-3";
window.RDL.SkinsFullHTML = [];

window.RDL.UserClaims = null;
window.RDL.ContinentCode = "";
window.RDL.UserConsent = true;
window.RDL.ShowResumeCheck = false;
window.RDL.WorkExpInOrder = false;
window.RDL.LogOptimizelyEvents = true;
window.RDL.selectedPortal = null;
window.RDL.isJobHero = /jobhero/i.test(window.location.pathname);
window.RDL.intentcdMapping = "";
window.RDL.DFHIW = false;
window.RDL.executeWizardFlow = false;
window.RDL.enableDirectFlow = false;
window.RDL.MoveRegistrationUploadFlow = false;
window.RDL.MoveEducationAfterContact = false;
window.RDL.IsOptimizelyEnabled = true;
window.RDL.maxloopCount = 5;
window.RDL.loopTimeGapInSec = 5;
window.RDL.createUserCallCounter = 0;
window.RDL.createUserTimer = undefined;
window.RDL.claimCallCounter = 0;
window.RDL.claimCallTimer = undefined;
window.RDL.ArrayFeatureSet = [];
window.RDL.currentUrl = window.location.href.toLowerCase();
window.RDL.LCDOTCom = "livecareer.com";
window.RDL.useGoogleWidget = null;
var userClaims = null;
var isHIWEventsFired = false;
var bGuestUserCreated = true;
var portalConfigCodes = [
    { Key: "livecareer.com", Value: "3", BaseApiUrl: "https://api-@@env.livecareer.com/api/v1/", GTMKey: "GTM-M9LPQ8X", PrimaryGTM: "GTM-PZMP4DB", PortalCode: "lca", BasePath: "/build-resume", isIntl: false, templateId: "-3", optimizelyKey: "4653093208", country_cd: "us", createGuestUser: true, downLoadAccountsLoginJs: true, cookieDomain: ".livecareer.com", culture: "en-US" },
    { Key: "myperfectresume.com", Value: "16", BaseApiUrl: "https://api-@@env.myperfectresume.com/api/v1/", GTMKey: "GTM-KQ55PV6", PrimaryGTM: "GTM-NXP87FS", PortalCode: "mpr", BasePath: "/build-resume", isIntl: false, templateId: "-3", optimizelyKey: "130872158", country_cd: "us", createGuestUser: true, downLoadAccountsLoginJs: true, cookieDomain: ".myperfectresume.com", culture: "en-US" },
    // { Key: "myperfectcv.co.uk", Value: "29", BaseApiUrl: "https://api-@@env-embedded-builder.myperfectresume.com/api/v1/", GTMKey: "GTM-KQ55PV6", PrimaryGTM: "GTM-NXP87FS", PortalCode: "muk", BasePath: "/build-resume" }
    { Key: "myperfectcv.co.uk", Value: "29", BaseApiUrl: "https://api-@@env.myperfectcv.co.uk/api/v1/", GTMKey: "GTM-WBRKWW9", PrimaryGTM: "GTM-W9FHQNJ", PortalCode: "muk", BasePath: "/build-cv", isIntl: true, templateId: "-4", optimizelyKey: "2516310534", country_cd: "uk", cookieDomain: ".myperfectcv.co.uk", culture: "en-GB" },
    { Key: "moncvparfait.fr", Value: "32", BaseApiUrl: "https://api-@@env.moncvparfait.fr/api/v1/", GTMKey: "GTM-KRRQDN2", PrimaryGTM: "GTM-T99VCRZ", PortalCode: "mfr", BasePath: "/creer-cv", isIntl: true, templateId: "-5", optimizelyKey: "3189240345", country_cd: "fr", cookieDomain: ".moncvparfait.fr", culture: "fr-FR" },
    { Key: "micvideal.es", Value: "33", BaseApiUrl: "https://api-@@env.micvideal.es/api/v1/", GTMKey: "GTM-WRQNKHP", PrimaryGTM: "GTM-K3QC4XR", PortalCode: "mes", BasePath: "/crear-cv", isIntl: true, templateId: "-6", optimizelyKey: "3157810228", country_cd: "es", cookieDomain: ".micvideal.es", culture: "es-ES" },
    { Key: "meucurriculoperfeito.com.br", Value: "62", BaseApiUrl: "https://api-@@env.meucurriculoperfeito.com.br/api/v1/", GTMKey: "GTM-MP3CZ5Q", PrimaryGTM: "GTM-NQ3454Z", PortalCode: "mbr", BasePath: "/criar-curriculo", isIntl: true, templateId: "-9", optimizelyKey: "11183925595", country_cd: "br", cookieDomain: ".meucurriculoperfeito.com.br", culture: "pt-BR" },
    { Key: "ilcvperfetto.it", Value: "37", BaseApiUrl: "https://api-@@env.ilcvperfetto.it/api/v1/", GTMKey: "", PrimaryGTM: "GTM-N6MDKF", PortalCode: "mit", BasePath: "/crea-curriculum", isIntl: true, templateId: "-7", optimizelyKey: "3541280203", country_cd: "it", cookieDomain: ".ilcvperfetto.it", culture: "it-IT" },
    { Key: "myperfectcoverletter.com", Value: "20", BaseApiUrl: "https://api-@@env.myperfectcoverletter.com/api/v1/", GTMKey: "GTM-NQD2D3X", PrimaryGTM: "GTM-T335877", PortalCode: "mpc", BasePath: "/build-resume", isIntl: false, templateId: "-3", optimizelyKey: "312806921", country_cd: "us", cookieDomain: ".myperfectcoverletter.com", culture: "en-US" },
    { Key: "hloom.com", Value: "16", BaseApiUrl: "https://api-@@env.myperfectresume.com/api/v1/", GTMKey: "GTM-KQ55PV6", PrimaryGTM: "GTM-NXP87FS", PortalCode: "mpr", BasePath: "/build-resume", isIntl: false, templateId: "-3", optimizelyKey: "130872158", country_cd: "us", skipAuthCookieCheck: true, createGuestUser: true, downLoadAccountsLoginJs: true, isThirdPartySite: true, cookieDomain: ".myperfectresume.com", culture: "en-US" },
    { Key: "jobhero.com", Value: "16", BaseApiUrl: "https://api-@@env.myperfectresume.com/api/v1/", GTMKey: "GTM-KQ55PV6", PrimaryGTM: "GTM-NXP87FS", PortalCode: "mpr", BasePath: "/build-resume", isIntl: false, templateId: "-3", optimizelyKey: "130872158", country_cd: "us", skipAuthCookieCheck: true, createGuestUser: true, downLoadAccountsLoginJs: true, isThirdPartySite: true, cookieDomain: ".myperfectresume.com", culture: "en-US" },
    { Key: "les-dev.com", Value: "79", BaseApiUrl: "https://api-embeddedbuilder.les-dev.com/api/v1/", GTMKey: "GTM-M9LPQ8X", PrimaryGTM: "GTM-PZMP4DB", PortalCode: "wlb", BasePath: "/resume", isIntl: false, templateId: "-3", optimizelyKey: "4653093208", country_cd: "us", createGuestUser: true, downLoadAccountsLoginJs: true, isWhiteLabel: true, isZety: true, cookieDomain: ".les-dev.com", culture: "en-US" },
    { Key: "zety.com", Value: "84", BaseApiUrl: "https://api-@@env.zety.com/api/v1/", GTMKey: "", PrimaryGTM: "GTM-KTZQJX", PortalCode: "zty", BasePath: "/resume", isIntl: false, templateId: "-3", optimizelyKey: "", country_cd: "us", createGuestUser: true, downLoadAccountsLoginJs: true, isWhiteLabel: true, isZety: true, cookieDomain: ".zety.com", culture: "en-US" },
    { Key: "uk.les-dev.com", Value: "85", BaseApiUrl: "https://api-@@env.les-dev.com/api/v1/", GTMKey: "", PrimaryGTM: "GTM-PZMP4DB", PortalCode: "zuk", BasePath: "/build-cv", isIntl: true, templateId: "-3", optimizelyKey: "", country_cd: "uk", createGuestUser: true, downLoadAccountsLoginJs: true, isWhiteLabel: true, isZety: true, cookieDomain: ".les-dev.com", culture: "en-US" },
    { Key: "micvideal.com.ar", Value: "82", BaseApiUrl: "https://api-@@env.micvideal.com.ar/api/v1/", GTMKey: "GTM-KRXTDSN", PrimaryGTM: "GTM-K96PJM4", PortalCode: "mar", BasePath: "/ar-crear-cv", isIntl: true, templateId: "-6", optimizelyKey: "15185640607", country_cd: "ar", cookieDomain: ".micvideal.com.ar", culture: "es-ES" },
    { Key: "micvideal.cl", Value: "81", BaseApiUrl: "https://api-@@env.micvideal.cl/api/v1/", GTMKey: "GTM-MS6JGPH", PrimaryGTM: "GTM-N2XNTLM", PortalCode: "mcl", BasePath: "/cl-crear-cv", isIntl: true, templateId: "-6", optimizelyKey: "15214960911", country_cd: "cl", cookieDomain: ".micvideal.cl", culture: "es-ES" },
    { Key: "micvideal.mx", Value: "61", BaseApiUrl: "https://api-@@env.micvideal.mx/api/v1/", GTMKey: "GTM-N74JM3V", PrimaryGTM: "GTM-MHJBF6X", PortalCode: "mmx", BasePath: "/mx-crear-cv", isIntl: true, templateId: "-6", optimizelyKey: "15284800214", country_cd: "mx", cookieDomain: ".micvideal.mx", culture: "es-ES" },
    { Key: "micvideal.pe", Value: "83", BaseApiUrl: "https://api-@@env.micvideal.pe/api/v1/", GTMKey: "GTM-KNNNHH5", PrimaryGTM: "GTM-MZGX5B9", PortalCode: "mpe", BasePath: "/pe-crear-cv", isIntl: true, templateId: "-6", optimizelyKey: "15170830902", country_cd: "pe", cookieDomain: ".micvideal.pe", culture: "es-ES" }


];

//window.RDL.PortalCode = PortalCode;
window.RDL.MPR_Registration_Redesign_ABTest_Id = "";
window.RDL.MPR_Registration_Redesign_ABTest_Name = "";
window.RDL.MPCV_OnePageChooseTemplate_ABTest_Id = "";
window.RDL.MPCV_OnePageChooseTemplate_ABTest_Name = "";
window.RDL.MPR_LoginAfterChooseTemplate_ABTest_Id = "";
window.RDL.MPR_LoginAfterChooseTemplate_ABTest_Name = "";
window.RDL.MPR_EnlargeResumePreview_ABTest_Id = "";
window.RDL.MPR_EnlargeResumePreview_ABTest_Name = "";
window.RDL.LCA_MoveRegistration_InUpload_ABTest_Id = "";
window.RDL.LCA_MoveRegistration_InUpload_ABTest_Name = "";
window.RDL.MPR_MoveRegistration_InUpload_ABTest_Id = "";
window.RDL.MPR_MoveRegistration_InUpload_ABTest_Name = "";
window.RDL.MPR_SELL_CHECKOUT_Modal_Id = "";
window.RDL.MPR_SELL_CHECKOUT_Modal_Name = "";
window.RDL.MPR_ShrinkPreview_ABTest_Id = "";
window.RDL.MPR_ShrinkPreview_ABTest_Name = "";
window.RDL.First_Name = "";
window.RDL.Last_Name = "";

window.RDL.MPR_TemplateWithName_ABTest_Id = "";
window.RDL.MPR_TemplateWithName_ABTest_Name = "";

window.RDL.MPR_RWZ_Resume_Check_ABTest_1_Id = "";
window.RDL.MPR_RWZ_Resume_Check_ABTest_1_Name = "";
window.RDL.MPR_RWZ_Resume_Check_ABTest_2_Id = "";
window.RDL.MPR_RWZ_Resume_Check_ABTest_2_Name = "";
window.RDL.MPR_RWZ_Enlarge_With_Templates_Id = "";
window.RDL.MPR_RWZ_Enlarge_With_Templates_Name = "";
window.RDL.showPreviewWithTemplates = false;

window.RDL.MPFR_SkipIndustry_ABTest_Id = "";
window.RDL.MPR_SkipIndustry_ABTest_Name = "";

window.RDL.MPCV_SkipIndustry_TTCABTest_Id = "";
window.RDL.MPCV_SkipIndustry_TTCABTest_Name = "";

window.RDL.MPCV_UKColourPicker_ABTest_Id = "";
window.RDL.MPCV_UKColourPicker_ABTest_Name = "";

window.RDL.MPR_Move_EDUC_After_CNTC_ABTest_Id = "";
window.RDL.MPR_Move_EDUC_After_CNTC_ABTest_Name = "";

window.RDL.LCA_RWZ_COMBINED_HIW_ABTest_Id = "d4796d53-1e12-44fc-8ed8-4ddcee5fbab3"; // This is visitor abtest implemented in MVC code  so we are assigning direct value of abtestId here 
window.RDL.LCA_RWZ_COMBINED_HIW_ABTest_Name = "Combined HIW With Create Resume Page";

window.RDL.MPR_PreSelectTemplate_ABTest_Id = "";  //PER-3238
window.RDL.MPR_PreSelectTemplate_ABTest_Name = "";

window.RDL.LCA_RETURNING_VISITOR_REGISTRATION_ABTest_Id = ""; // Registration is moved after add-additional-sections step for non-registered returning users
window.RDL.LCA_RETURNING_VISITOR_REGISTRATION_ABTest_Name = ""; // this experiments info is available in RDL.ExperimentInfo and not in store.

window.RDL.MPR_ExperienceLevel_ABTest_Id = "";  //PER-3411
window.RDL.MPR_ExperienceLevel_ABTest_Name = "";

window.RDL.MPCV_NewThumbnailsPhoto_ABTest_Id = "";
window.RDL.MPCV_NewThumbnailsPhoto_ABTest_Name = "";

window.RDL.MPCV_ResumeTitle_ABTest_Id = "";
window.RDL.MPCV_ResumeTitle_ABTest_Name = "";

window.RDL.LCA_PopularTemplatesForJobTitles_ABTest_Id = "";
window.RDL.LCA_PopularTemplatesForJobTitles_ABTest_Name = "";

window.RDL.LCA_UnifiedBar_ABTest_Id = "";
window.RDL.LCA_UnifiedBar_ABTest_Name = "";

window.RDL.LCA_TTCHighlight_ABTest_Id = "";
window.RDL.LCA_TTCHighlight_ABTest_Name = "";

window.RDL.LCA_HIW_Page_Animation_ABTest_Id = "";
window.RDL.LCA_HIW_Page_Animation_ABTest_Name = "";

var userUIdFrmExtrnlSite = '';
var createGuestUserTimer;
var generateClaimsTimer;
var postGuestUserTimer;
var showAffiliateTimer;
var mixpanelTimeout;
var AsyncSegTrackInterval;
var guestUserInterval;
var pageLoadTimer;

//var portalConfigCd = 1;
var _gtmKey = 'GTM-M9LPQ8X';
var primaryGTM = 'GTM-PZMP4DB';
var portalCode = 'lca';
var optimizelyKey = '';
var _nRepData = _nRepData || []; _nRepData['kb'] = '1017422871';
var environment = window.location.host.split('.')[0].replace('am-', '').replace('-builder', '').replace('-app', '');
var subDomainCountryCD = "";
if (environment.indexOf("uk") > -1) {
    subDomainCountryCD = "uk";
    environment = environment.replace('-uk', '');
}
var BoldAuthCookieName = "BOLDAuth";
/* API here */;
_nRepData['embed'] = { account: 'livecareer', container: 'nanoRepEmbedContainer', width: 400, maxHeight: 500, dynamicSize: true, cdcFrame: '', cdcVersion: 3, scriptVersion: '4.0.2.11' };

(function (win, doc) {
    // if (navigator.serviceWorker) {
    //     navigator.serviceWorker.register('../service-worker.js', {
    //         scope: './'
    //     })
    //         .then(function (registration) {
    //             console.log(registration);
    //         })
    //         .catch(function (e) {
    //             console.error(e);
    //         })
    // } else {
    //     console.log('Service Worker is not supported in this browser.')
    // }

    var productName = 'Embedded Builder';
    var platformValue = 'Web';
    /// String.format JS implementation
    if (!String.prototype.format) {
        String.prototype.format = function () {
            var args = arguments;
            return this.replace(/{(\d+)}/g, function (match, number) {
                return typeof args[number] != 'undefined' ?
                    args[number] :
                    match;
            });
        };
    }

    function bindEvent(elem, name, func) {

        if (elem.addEventListener) {
            elem.addEventListener(name, func);
        } else if (elem.attachEvent) {
            elem.attachEvent('on' + name, func);
        } else {
            elem['on' + name] = function (e) {
                func(e);
            }
        }
    }

    function windowLoad(func) {
        bindEvent(win, 'load', func);
    }


    function hasClass(elem, className) {
        return elem.className && (new RegExp(className, 'g')).test(elem.className);
    }

    function toggleClass(elem, className) {
        if (hasClass(elem, className)) {
            elem.className = elem.className.replace((new RegExp(className, 'g')), "");
        } else {
            elem.className += " " + className;
        }
    }

    function addClass(elem, className) {
        if (!hasClass(elem, className)) {
            elem.className += " " + className;
        }
    }

    function removeClass(elem, className) {
        if (hasClass(elem, className)) {
            elem.className = elem.className.replace((new RegExp(className, 'g')), "");
        }
    }

    function setClass(elem, className) {
        elem.className = className;
    }

    function preventDefault(e) {
        if (e) {
            if (e.preventDefault) {
                e.preventDefault();
            }
        }
    }

    function stopPropagation(e) {
        if (e) {
            if (e.stopPropagation) {
                e.stopPropagation();
            }
        }
    }

    function tryExecuteFunction(func) {
        try {
            func();
        } catch (err) {
            if (console) {
                if (console.error) {
                    console.error('Error in executing function: ', err);
                } else {
                    console.log('Error in executing function: ' + err);
                }
            }
        }
    }

    function isSessionStorageAvailable() {
        var testKey = 'test',
            storage = win.sessionStorage;
        try {
            if (storage) {
                storage.setItem(testKey, '1');
                storage.removeItem(testKey);
                return true;
            } else {
                return false;
            }
        } catch (error) {
            return false;
        }
    }

    function appReady() {
        /* for Desktop*/
        if (window.RDL.LowerVersionBroswer == true) {
            //EB.loadStyleSheet(configPath + portalCode + "/styles/font-awesome/css/font-awesome.min.css");
            //Need to check if this is being loaded in any case
            EB.loadStyleSheet(configPath + portalCode + "/styles/font-awesome-5/css/fontawesome5.min.css");

        }
        var myAccount = doc.getElementById("my-account");
        var dropdownMenu = doc.getElementById("dropdown-menu");
        if (myAccount) {
            bindEvent(myAccount, 'click', function (e) {
                preventDefault(e);
                stopPropagation(e);
                toggleClass(dropdownMenu, "focus-in");
            });
            bindEvent(doc, 'click', function (e) {
                removeClass(dropdownMenu, "focus-in");
            });
        }

        /* for mobile*/
        var menuBar = doc.getElementById("menuBarLink");
        var menuLinksSignIn = doc.getElementById("menuLinksMobileSignedIn");
        var menuLinksSignOut = doc.getElementById("menuLinksMobileSignedOut");
        var addClassName = 'show-menu';
        if (menuBar) {
            bindEvent(menuBar, 'click', function (e) {
                preventDefault(e);
                stopPropagation(e);
                if (menuLinksSignIn && EB.User.IsSignedIn()) {
                    addClass(menuLinksSignIn, "show-menu");
                }
                if (menuLinksSignOut) {
                    addClass(menuLinksSignOut, "show-menu");
                }
                document.body.classList.add("no-scroll");
            });

            var closeMobileMenuEvent = function (e) {
                preventDefault(e);
                stopPropagation(e);
                if (menuLinksSignIn && EB.User.IsSignedIn()) {
                    setClass(menuLinksSignIn, "menu-links-mobile");
                }
                if (menuLinksSignOut && !EB.User.IsSignedIn()) {
                    setClass(menuLinksSignOut, "menu-links-mobile");
                }
                document.body.classList.remove("no-scroll");
            };
            var closeIcon = doc.getElementById("closeIcon");
            var closeIconSignOut = doc.getElementById("closeIconSignOut");
            bindEvent(closeIcon, 'click', closeMobileMenuEvent);
            if (closeIconSignOut) {
                bindEvent(closeIconSignOut, 'click', closeMobileMenuEvent);
            }
        }
    }

    function init() {
        // var urlOrigin = window.location.origin;
        // if (urlOrigin == null || urlOrigin == undefined) {
        //     urlOrigin = window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? (':' + window.location.port) : '');
        // }
        var domain;
        if (window.location.host.split('.').length > 2) {
            domain = window.location.host.split(':')[0].substr(window.location.host.indexOf('.') + 1);//getDomain(urlOrigin, false);
            if (subDomainCountryCD == "uk")
                domain = "uk." + domain;
        } else {
            var domain = window.location.host;
        }
        //var domain = window.location.host.split(':')[0].substr(window.location.host.indexOf('.') + 1);//getDomain(urlOrigin, false);
        if (doc.addEventListener) {
            doc.addEventListener('DOMContentLoaded', appReady);
        } else {
            appReady();
        }
        if (!!portalConfigCodes) {
            var configCdIndex = -1;
            for (var i = 0; i < portalConfigCodes.length; i++) {
                if (portalConfigCodes[i].Key.toLowerCase() == domain.toLowerCase()) {
                    configCdIndex = i;
                    break;
                }
            }
            if (configCdIndex >= 0) {
                //portalConfigCd = portalConfigCodes[configCdIndex].Value;
                environment = portalConfigCodes[configCdIndex].Value == "79" ? "qa" : environment;
                window.RDL.Paths.BaseApiUrl = getApiUrl(portalConfigCodes[configCdIndex].BaseApiUrl, environment);
                window.RDL.Paths.BaseApiUrlV2 = getApiUrl(portalConfigCodes[configCdIndex].BaseApiUrl, environment, "v2");
                _gtmKey = portalConfigCodes[configCdIndex].GTMKey;
                primaryGTM = portalConfigCodes[configCdIndex].PrimaryGTM;
                portalCode = portalConfigCodes[configCdIndex].PortalCode;
                window.RDL.Paths.BasePath = portalConfigCodes[configCdIndex].BasePath;
                window.RDL.PortalCode = portalConfigCodes[configCdIndex].PortalCode;
                window.RDL.isINTL = portalConfigCodes[configCdIndex].isIntl;
                window.RDL.isWhiteLabel = portalConfigCodes[configCdIndex].isWhiteLabel;
                window.RDL.isZety = portalConfigCodes[configCdIndex].isZety;
                window.RDL.templateid = portalConfigCodes[configCdIndex].templateId;
                window.RDL.countryCD = portalConfigCodes[configCdIndex].country_cd;
                window.RDL.skipAuthCookieCheck = !!portalConfigCodes[configCdIndex].skipAuthCookieCheck;
                optimizelyKey = portalConfigCodes[configCdIndex].optimizelyKey;
                window.RDL.PortalSettings.ConfigurePortal = portalConfigCodes[configCdIndex].Value;
                window.RDL.selectedPortal = portalConfigCodes[configCdIndex];
                window.RDL.cultureCD = portalConfigCodes[configCdIndex].culture;

                if (window.RDL.PortalSettings.ConfigurePortal == "16" && (environment == "stg" || environment == "www")) {
                    addNewRelic("16428891");
                }
                else if (window.RDL.PortalSettings.ConfigurePortal == "3" && (environment == "stg" || environment == "www")) {
                    addNewRelic("16428938");
                }
                else if (window.RDL.PortalSettings.ConfigurePortal == "20" && (environment == "stg" || environment == "www")) {
                    addNewRelic("16428888");
                }
                else if (window.RDL.PortalSettings.ConfigurePortal == "84" && (environment == "builder" || environment == "stg" || environment == "www")) {
                    addNewRelic("229773195");
                }


                if (window.RDL.PortalSettings.ConfigurePortal == "16" && window.RDL.isJobHero) {
                    window.RDL.Paths.BasePath = "/jobhero";
                }
            }
        }
    }
    init();

    var _plugins = {};

    function _plugin(namespace) {
        var _thisPlugin = this;
        var _functionStack = [];

        function _execute() {
            if (typeof win[namespace] !== 'undefined') {
                while (_functionStack.length > 0) {
                    var func = _functionStack.shift();
                    tryExecuteFunction(func);
                }
            }
        }

        _thisPlugin.Load = function (func) {
            windowLoad(function (e) {
                func();
                _execute();
            });
            return _thisPlugin;
        };
        _thisPlugin.LoadScript = function (url) {
            windowLoad(function (e) {
                var script = doc.createElement('script');
                bindEvent(script, 'load', _execute);

                script.src = url;
                doc.body.appendChild(script);
            });
            return _thisPlugin;
        };
        _thisPlugin.Ready = function (func) {
            if (typeof win[namespace] !== 'undefined') {
                tryExecuteFunction(func);
            } else {
                _functionStack.push(func);
            }
            return _thisPlugin;
        };
    }

    win.EB = win.EB || {};
    var EB = win.EB;

    EB.CallAjax = function (url, method, data, async, withCredentials, callback, resolve) {
        var xmlhttp;
        // compatible with IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onload = function () {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                if (callback) {
                    if (resolve) {
                        callback(JSON.parse(xmlhttp.responseText), resolve);
                    }
                    else {
                        callback(JSON.parse(xmlhttp.responseText));
                    }
                }
            }
        }
        xmlhttp.open(method, url, async);
        if (withCredentials)
            xmlhttp.withCredentials = true;

        if (data) {
            xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
            xmlhttp.send(data);
        }
        else
            xmlhttp.send();
    }

    EB.LoadJsFile = function (src, async, callback, crossorigin) {
        var s,
            r,
            t;
        r = false;
        s = document.createElement('script');
        s.type = 'text/javascript';
        s.src = src;
        if (crossorigin == true) {
            s.crossOrigin = 'anonymous';
        }
        s.async = (async != null && async != undefined) ? async : true;
        s.onload = s.onreadystatechange = function () {
            if (!r && (!this.readyState || this.readyState == 'complete' || this.readyState == 'loaded')) {
                r = true;
                callback && callback();
            }
        };
        t = document.getElementsByTagName('script')[0];
        t.parentNode.insertBefore(s, t);
    }

    EB.loadStyleSheet = function (src) {
        if (document.createStyleSheet) document.createStyleSheet(src);
        else {
            var stylesheet = document.createElement('link');
            stylesheet.href = src;
            stylesheet.rel = 'stylesheet';
            stylesheet.type = 'text/css';
            document.getElementsByTagName('head')[0].appendChild(stylesheet);
        }
    }

    EB.Plugin = function (namespace) {
        if (typeof namespace === 'string') {
            if (!_plugins[namespace]) {
                _plugins[namespace] = new _plugin(namespace);
            }
            return _plugins[namespace];
        }
        return null;
    };

    EB.ClearSessionStorage = function () {
        var d1 = new Date();
        if (isSessionStorageAvailable()) {
            win.sessionStorage.clear();
        }
        window.EB.createCookie("docId", "", -1);
        console.log("time taken in clearing session" + (new Date() - d1));
    };

    EB.createCookie = function (name, value, days, domain) {
        var expires = "";
        var _domain = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        } else
            expires = "";

        if (domain) {
            _domain = "; domain=" + domain;
        }
        document.cookie = name + "=" + value + expires + _domain + "; path=/;";
    }

    EB.delete_cookie = function (name, domain) {
        var _domain = "";
        var date = new Date();
        date.setTime(date.getTime() - 1);
        expires = "; expires=" + date.toGMTString();
        if (domain) {
            _domain = "; domain=" + domain;
        }
        document.cookie = name + "=;" + expires + _domain + "; path=/;";
    };

    EB.readCookie = function (name) {
        // alert("app.js file");

        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    EB.AsyncTrack = function (isLoggedIn, visitId) {
        if (window.RDL.UserConsent) {
            getAnalyticsValues();
            if (typeof AsyncSegTrack == 'function' && typeof analytics != 'undefined' && typeof analytics == "object" && typeof analytics.page == 'function' && isDeviceRegister) {
                AsyncSegTrack(window.RDL.userId, isLoggedIn, userType, visitId);
            }
            else {
                clearInterval(AsyncSegTrackInterval);
                AsyncSegTrackInterval = setInterval(function () {
                    if (typeof AsyncSegTrack == 'function' && typeof analytics != 'undefined' && typeof analytics == "object" && typeof analytics.page == 'function' && isDeviceRegister) {
                        AsyncSegTrack(window.RDL.userId, isLoggedIn, userType, visitId);
                        clearInterval(AsyncSegTrackInterval);
                    }
                }, 500);
            }
        }
    }
    EB.CreateGuestUser = function () {
        clearInterval(createGuestUserTimer);
        createGuestUserTimer = setInterval(createGuestUser, 200);
    }
    EB.GenerateClaims = function () {
        clearInterval(generateClaimsTimer);
        generateClaimsTimer = setInterval(generateClaims, 200);
    }

    EB.RegisterGuestUser = function (guestUserUID, emailAddress, password, firstName, lastName, phoneNumber, mobileNumber, EmailOptin, docId, keepMeLoggedIn, previousEmail) {
        if (guestUserUID == null || guestUserUID.trim() == '' || guestUserUID == 'undefined') {
            accountsLCRegister(win.RDL.Paths.AccountsURL, firstName, lastName, emailAddress, password, 'registered', phoneNumber, 'current', win.RDL.PortalSettings.productCD, '14', mobileNumber);
        }
        else {
            RegisterGuestUser(guestUserUID, emailAddress, password, window.RDL.PortalSettings.ConfigurePortalCd, window.RDL.PortalSettings.ConfigureProductCd, window.RDL.Paths.AccountsURL, firstName, lastName, phoneNumber, mobileNumber, 'Resumes', "", EmailOptin, docId, keepMeLoggedIn, previousEmail);
            //RegisterGuestUser(guestUserUID, emailAddress, password, window.RDL.PortalSettings.ConfigurePortalCd, window.RDL.PortalSettings.ConfigureProductCd, window.RDL.Paths.AccountsURL, firstName, lastName, phoneNumber, mobileNumber, EmailOptin);
        }
    }
    EB.GetQueryString = function (field) {
        var href = window.location.href;
        var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
        var string = reg.exec(href);
        return string ? string[1] : null;
    };
    EB.GetQueryStringFromURL = function (url, field) {
        var reg = new RegExp('[?&]' + field + '=([^&#]*)', 'i');
        var string = reg.exec(url);
        return string ? string[1] : null;
    };
    EB.VisitInfo = function (callback, resolve) {
        EB.CallAjax(window.RDL.Paths.BaseApiUrl + 'user/visitinfo', "GET", null, true, true, callback, resolve)
    }
    EB.IsUserExist = function () {
        if (window.RDL.UserClaims && window.RDL.UserClaims.user_uid) {
            var url = window.RDL.Paths.BaseApiUrl + 'users/' + window.RDL.UserClaims.user_uid;
            var xmlhttp;
            xmlhttp = new XMLHttpRequest();
            xmlhttp.onload = function () {
                if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                    var user = JSON.parse(xmlhttp.responseText);
                    if (user == null || user == undefined) {
                        clearAndRedirect("/")
                    }
                }
                else if (xmlhttp.readyState == 4 && xmlhttp.status == 400) {
                    clearAndRedirect("/");
                }
            }
            xmlhttp.open("GET", url, true);
            xmlhttp.send();
        }
    }

    EB.Claims = function (callback, isAsync, resolve) {
        if (EB.isAnyAuthCookieExists() == true) {
            var trace = '';
            try { var a = {}; a.debug(); } catch (ex) { trace = ex.stack };

            trace = JSON.stringify(trace.replace('TypeError: a.debug is not a function\n', '').replace(new RegExp('https://' + window.location.host, 'gi'), '').replace(/>/g, '').replace(/</g, '').substring(0, 2500));


            window.EB.createCookie('claimsTrace', trace, null, window.RDL.selectedPortal.cookieDomain);

            var buildVersion = getCurrentVersion().replace(".js", "");
            if (isAsync) {
                if (window.EB.GetQueryString('uid') != null && window.EB.GetQueryString('uid') != '') {

                    EB.CallAjax(window.RDL.Paths.BaseApiUrlV2 + 'user/claims?portalId=' + window.RDL.PortalSettings.ConfigurePortal + '&v=' + buildVersion + '&urlReferrer=' + document.referrer + '&cookieEnabled=' + navigator.cookieEnabled + "&uid=" + window.EB.GetQueryString('uid') + '&culture=' + window.RDL.cultureCD, "GET", null, true, true, callback, resolve);
                }
                else {
                    EB.CallAjax(window.RDL.Paths.BaseApiUrlV2 + 'user/claims?portalId=' + window.RDL.PortalSettings.ConfigurePortal + '&v=' + buildVersion + '&urlReferrer=' + document.referrer + '&cookieEnabled=' + navigator.cookieEnabled + '&culture=' + window.RDL.cultureCD, "GET", null, true, true, callback, resolve);
                }
            } else {
                if (window.EB.GetQueryString('uid') != null && window.EB.GetQueryString('uid') != '') {

                    EB.CallAjax(window.RDL.Paths.BaseApiUrlV2 + 'user/claims?portalId=' + window.RDL.PortalSettings.ConfigurePortal + '&v=' + buildVersion + '&urlReferrer=' + document.referrer + '&cookieEnabled=' + navigator.cookieEnabled + "&uid=" + window.EB.GetQueryString('uid') + '&culture=' + window.RDL.cultureCD, "GET", null, false, true, callback);
                }
                else {

                    EB.CallAjax(window.RDL.Paths.BaseApiUrlV2 + 'user/claims?portalId=' + window.RDL.PortalSettings.ConfigurePortal + '&v=' + buildVersion + '&urlReferrer=' + document.referrer + '&cookieEnabled=' + navigator.cookieEnabled + '&culture=' + window.RDL.cultureCD, "GET", null, false, true, callback);
                }
            }

            window.RDL.claimCallCounter++;
            clearTimeout(window.RDL.claimCallTimer);
            window.RDL.claimCallTimer = setTimeout(function () {
                window.RDL.claimCallCounter = 0;
            }, window.RDL.loopTimeGapInSec * 1000);

            if (window.RDL.claimCallCounter > window.RDL.maxloopCount) {
                // redirect to LP.
                clearAndRedirect("/?forceRedirect=StuckInClaimCall")
            }

        }
        else {
            window.EB.CreateGuestUser();
            if (resolve)
                resolve('');
        }
    }

    EB.isAnyAuthCookieExists = function () {
        var anyAuthCookieExists = true;
        if (window.RDL.PortalSettings.ConfigurePortal == "3" || window.RDL.PortalSettings.ConfigurePortal == "16" || window.RDL.PortalSettings.ConfigurePortal == "79" || window.RDL.PortalSettings.ConfigurePortal == "84") {
            if (window.EB.readCookie("userinfo") == null && window.EB.readCookie(BoldAuthCookieName) == null) {
                anyAuthCookieExists = false;
            }
        }
        return anyAuthCookieExists;
    }

    EB.ForgotPassword = function (emailAddress) {
        DirectForgotPassword(emailAddress, win.RDL.PortalSettings.ConfigureProductCd, win.RDL.PortalSettings.ConfigurePortalName, 'flow', encodeURI(win.location.origin + win.RDL.Paths.BasePath + win.location.search), win.RDL.Paths.AccountsURL)
    }
    EB.NanoRep = function () {
        var nanoRepJs = document.getElementById('nanoRepJs');
        if (nanoRepJs != undefined)
            nanoRepJs.parentNode.removeChild(nanoRepJs);

        (function () { var windowLoadFunc = function () { var _nRepData = window._nRepData || []; _nRepData['windowLoaded'] = true; if (typeof (_nRepData['windowOnload']) === 'function') _nRepData['windowOnload'](); }; if (window.attachEvent) window.attachEvent('onload', windowLoadFunc); else if (window.addEventListener) window.addEventListener('load', windowLoadFunc, false); var sc = document.createElement('script'); sc.type = 'text/javascript'; sc.async = true; sc.defer = true; sc.id = 'nanoRepJS'; sc.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'my.nanorep.com/widget/scripts/embed.js?account=livecareer'; var _head = document.getElementsByTagName('head')[0]; _head.appendChild(sc); })();
    }
    EB.HideNanoRep = function (event) {
        var $aHelpHIW = document.getElementById('aHelpHIW'),
            $aHelp = document.getElementById('aHelp');
        if (event.target.id != "aHelp" && event.target.id != "aHelpHIW") {
            toggleClass(document.getElementById('helpBody'), 'd-none');
            if ($aHelpHIW) $aHelpHIW.classList.remove('hover');
            if ($aHelp) $aHelp.classList.remove('hover');
        }
        // First we check if device support touch, otherwise it's click:
        var touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';
        document.body.removeEventListener(touchEvent, win.EB.HideNanoRep, true);
    }
    EB.toggleNanoRep = function (event) {
        var $aHelpHIW = document.getElementById('aHelpHIW'),
            $aHelp = document.getElementById('aHelp'),
            // First we check if device support touch, otherwise it's click:
            touchEvent = 'ontouchstart' in window ? 'touchstart' : 'click';;

        if (event.currentTarget.id == "aHelp" || event.currentTarget.id == "aHelpHIW") {
            toggleClass(document.getElementById('helpBody'), 'd-none');
            if (hasClass(document.getElementById('helpBody'), 'd-none')) {
                if ($aHelpHIW) $aHelpHIW.classList.remove('hover');
                if ($aHelp) $aHelp.classList.remove('hover');
                document.body.removeEventListener(touchEvent, win.EB.HideNanoRep, true);
            }
            else {
                if ($aHelpHIW) $aHelpHIW.classList.add('hover');
                if ($aHelp) $aHelp.classList.add('hover');
                document.body.addEventListener(touchEvent, window.EB.HideNanoRep, true);
            }
        }
    }
    EB.TrackAlias = function () {
        if (typeof TrackAlias == 'function' && RDL.UserClaims && RDL.UserClaims.user_uid) {
            TrackAlias(RDL.UserClaims.user_uid);
        }
        else {
            var TrackAliasInterval = setInterval(function () {
                if (typeof TrackAlias == 'function' && RDL.UserClaims && RDL.UserClaims.user_uid) {
                    TrackAlias(RDL.UserClaims.user_uid);
                    clearInterval(TrackAliasInterval);
                }
            }, 200);
        }
    }
    EB.TrackAlias();
    EB.SaveFirstTouchValuesFromQS = function () {
        var saveUTM_Campaign_First_Touch = window.EB.GetQueryString("utm_campaign") == null ? "undefined" : window.EB.GetQueryString("utm_campaign");
        var saveUTM_Content_First_Touch = window.EB.GetQueryString("utm_content") == null ? "undefined" : window.EB.GetQueryString("utm_content");
        var saveUTM_Medium_First_Touch = window.EB.GetQueryString("utm_medium") == null ? "undefined" : window.EB.GetQueryString("utm_medium");
        var saveUTM_Source_First_Touch = window.EB.GetQueryString("utm_source") == null ? "undefined" : window.EB.GetQueryString("utm_source");
        var saveUTM_Term_First_Touch = window.EB.GetQueryString("utm_term") == null ? "undefined" : window.EB.GetQueryString("utm_term");
        var utmFirstTouchCookieValue = "";
        if (saveUTM_Campaign_First_Touch)
            utmFirstTouchCookieValue = "saveUTM_Campaign_First_Touch-" + saveUTM_Campaign_First_Touch + "#";
        if (saveUTM_Content_First_Touch)
            utmFirstTouchCookieValue = utmFirstTouchCookieValue + "saveUTM_Content_First_Touch-" + saveUTM_Content_First_Touch + "#";
        if (saveUTM_Medium_First_Touch)
            utmFirstTouchCookieValue = utmFirstTouchCookieValue + "saveUTM_Medium_First_Touch-" + saveUTM_Medium_First_Touch + "#";
        if (saveUTM_Source_First_Touch)
            utmFirstTouchCookieValue = utmFirstTouchCookieValue + "saveUTM_Source_First_Touch-" + saveUTM_Source_First_Touch + "#";
        if (saveUTM_Term_First_Touch)
            utmFirstTouchCookieValue = utmFirstTouchCookieValue + "saveUTM_Term_First_Touch-" + saveUTM_Term_First_Touch + "#";

        if (utmFirstTouchCookieValue.length > 0)
            utmFirstTouchCookieValue = utmFirstTouchCookieValue.slice(0, -1);; //remove the last #
        if (utmFirstTouchCookieValue.length > 0) {
            window.EB.createCookie("UTMFirstTouchCookie", utmFirstTouchCookieValue.replace(/%22/g, '"'), null, window.RDL.selectedPortal.cookieDomain);
        }
    }

    EB.SaveLastTouchValuesFromQS = function () {
        var saveUTM_Campaign_Last_Touch = window.EB.GetQueryString("utm_campaign") == null ? "undefined" : window.EB.GetQueryString("utm_campaign");
        var saveUTM_Content_Last_Touch = window.EB.GetQueryString("utm_content") == null ? "undefined" : window.EB.GetQueryString("utm_content");
        var saveUTM_Medium_Last_Touch = window.EB.GetQueryString("utm_medium") == null ? "undefined" : window.EB.GetQueryString("utm_medium");
        var saveUTM_Source_Last_Touch = window.EB.GetQueryString("utm_source") == null ? "undefined" : window.EB.GetQueryString("utm_source");
        var saveUTM_Term_Last_Touch = window.EB.GetQueryString("utm_term") == null ? "undefined" : window.EB.GetQueryString("utm_term");
        var utmLastTouchCookieValue = "";
        if (saveUTM_Campaign_Last_Touch)
            utmLastTouchCookieValue = "saveUTM_Campaign_Last_Touch-" + saveUTM_Campaign_Last_Touch + "#";
        if (saveUTM_Content_Last_Touch)
            utmLastTouchCookieValue = utmLastTouchCookieValue + "saveUTM_Content_Last_Touch-" + saveUTM_Content_Last_Touch + "#";
        if (saveUTM_Medium_Last_Touch)
            utmLastTouchCookieValue = utmLastTouchCookieValue + "saveUTM_Medium_Last_Touch-" + saveUTM_Medium_Last_Touch + "#";
        if (saveUTM_Source_Last_Touch)
            utmLastTouchCookieValue = utmLastTouchCookieValue + "saveUTM_Source_Last_Touch-" + saveUTM_Source_Last_Touch + "#";
        if (saveUTM_Term_Last_Touch)
            utmLastTouchCookieValue = utmLastTouchCookieValue + "saveUTM_Term_Last_Touch-" + saveUTM_Term_Last_Touch + "#";

        if (utmLastTouchCookieValue.length > 0)
            utmLastTouchCookieValue = utmLastTouchCookieValue.slice(0, -1);; //remove the last #
        if (utmLastTouchCookieValue.length > 0) {
            window.EB.createCookie("UTMLastTouchCookie", utmLastTouchCookieValue.replace(/%22/g, '"'), null, window.RDL.selectedPortal.cookieDomain);
        }
    }

    if (window.location.href.toLowerCase().indexOf("utm_") > -1) {
        EB.SaveFirstTouchValuesFromQS();
        EB.SaveLastTouchValuesFromQS();
    }

    EB.TrackUTMParams = function () {

        var utmValues = window.EB.readCookie("UTMFirstTouchCookie");
        if (utmValues != null) {
            var utm_campaign = null;
            var utm_content = null;
            var utm_medium = null;
            var utm_source = null;
            var utm_term = null;
            var arrUTMVals = utmValues.split('#');
            for (i = 0; i < arrUTMVals.length; i++) {
                utmval = arrUTMVals[i];
                utmval = utmval.replace("saveUTM", "UTM").replace("_First_Touch", "");
                if (utmval.indexOf("-") > -1) {
                    var utmParams = utmval.split('-')[0].toLowerCase();
                    var utmParamVal = utmval.split('-')[1] != "undefined" ? utmval.substring(utmval.indexOf("-") + 1) : "";
                    switch (utmParams) {
                        case "utm_campaign":
                            utm_campaign = utmParamVal;
                            break;
                        case "utm_content":
                            utm_content = utmParamVal;
                            break;
                        case "utm_medium":
                            utm_medium = utmParamVal;
                            break;
                        case "utm_source":
                            utm_source = utmParamVal;
                            break;
                        case "utm_term":
                            utm_term = utmParamVal;
                            break;
                    }
                }
            };

            var propertiesToBeSent = {
                'UTM Source': utm_source,
                'UTM Medium': utm_medium,
                'UTM Term': utm_term,
                'UTM Content': utm_content,
                'UTM Campaign': utm_campaign,
            };

            var eventproperties = {};

            if (propertiesToBeSent) {
                for (var item in propertiesToBeSent) {
                    if (propertiesToBeSent[item]) {
                        eventproperties[item] = propertiesToBeSent[item];
                    }
                }
            }
            if (window.RDL.userId) {
                window.EB.TrackEvents("identify", eventproperties, window.RDL.userId, false);
            }
            else {
                clearInterval(guestUserInterval);
                guestUserInterval = setInterval(function () {
                    if (window.RDL.userId) {
                        window.EB.TrackEvents("identify", eventproperties, window.RDL.userId, false);
                        clearInterval(guestUserInterval);
                    }
                }, 200);
            }
        }
    };

    EB.TrackEvents = function (eventName, eventpropval, userid, islogin) {
        if (window.RDL.UserConsent) {
            islogin = RDL.UserClaims ? RDL.UserClaims.role != 'Guest' : islogin;
            if (eventpropval != null)
                eventpropval["userId"] = window.RDL.userId;
            else
                eventpropval = { 'userId': window.RDL.userId };
            if (typeof TrackEvents == 'function') {
                TrackEvents(eventName, eventpropval, userid, islogin);
            }
            else {
                var TrackEventsInterval = setInterval(function () {
                    if (typeof TrackEvents == 'function') {
                        TrackEvents(eventName, eventpropval, userid, islogin);
                        clearInterval(TrackEventsInterval);
                    }
                }, 500);
            }
        }
    }
    EB.TrackOptimizelyEvents = function (eventName) {
        if (window.RDL.LogOptimizelyEvents) {
            if (window.RDL.UserConsent) {
                if (typeof TrackOptimizelyEvents == 'function') {
                    TrackOptimizelyEvents(eventName);
                }
                else {
                    var TrackOptimizelyEventsInterval = setInterval(function () {
                        if (typeof TrackOptimizelyEvents == 'function') {
                            TrackOptimizelyEvents(eventName);
                            clearInterval(TrackOptimizelyEventsInterval);
                        }
                    }, 500);
                }
            }
        }
    }
    EB.HowItWorks = function () {
        win.RDL.howItWorksLoad = 1;
        window.EB.Claims(handleClaims);
    }

    EB.RunScratchFlow = function () {
        window.selectResume.scratchFlow();
    }

    EB.FocusFirstInputAndEnterContinue = function () {
        if (jQuery) {
            $('input[type!=hidden]:not(".form-control-placeholder"):visible:first').focus();
            window.EB.EnterHandler();
        }
        else {
            var loadJqueryTimer = setInterval(function () {
                if (jQuery) {
                    clearInterval(loadJqueryTimer);
                    $('input[type!=hidden]:not(".form-control-placeholder"):visible:first').focus();
                    window.EB.EnterHandler();
                }
            }, 200);
        }
    }

    EB.EnterHandler = function () {
        var $inputType = $("input[type!=checkbox]");
        $inputType.off("keypress");
        $inputType.on('keypress', function (e) {
            if (e.keyCode == 13) {
                e.preventDefault();
                if (!$(this).hasClass('js-ttc-input')) {
                    $(this).blur();
                    $("#onNextClick")[0].click();
                }
                else {
                    return false;
                }
            }
        });
    }

    EB.GetElementPosition = function (element) {
        return $(element).offset();
    }

    EB.AnimateToPosition = function (topPosition, duration, callback) {
        if (duration == null || duration == undefined) { duration = 400; }
        $("html, body").animate({ scrollTop: topPosition }, duration, function () {
            if (callback) { callback(); }
        });
    }

    EB.LoadGoogleMapsScript = function (clientKey, channelKey) {
        var mapsUrl = "//maps.googleapis.com/maps/api/js?client=@@clientKey&channel=@@channelKey&libraries=places";
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = mapsUrl.replace("@@clientKey", clientKey).replace("@@channelKey", channelKey);
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'googleMaps-js'));
    }

    EB.LoadGoogleMapsScriptINTL = function () {
        var mapsUrl = "//maps.googleapis.com/maps/api/js?key=@@key&libraries=places";
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = mapsUrl.replace("@@key", window.RDL.googleMapsKey);
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'googleMaps-js'));
    }

    EB.GetHTMLDocFromString = function (htmlString) {
        var parser = new DOMParser();
        var htmlDoc = parser.parseFromString(htmlString, "text/html");
        return htmlDoc;
    }

    if (!String.prototype.endsWith) { //polyfill for IE
        String.prototype.endsWith = function (searchString, position) {
            var subjectString = this.toString();
            if (typeof position !== 'number' || !isFinite(position)
                || Math.floor(position) !== position || position > subjectString.length) {
                position = subjectString.length;
            }
            position -= searchString.length;
            var lastIndex = subjectString.indexOf(searchString, position);
            return lastIndex !== -1 && lastIndex === position;
        };
    }

    (function (arr) {
        arr.forEach(function (item) {
            if (item.hasOwnProperty('prepend')) {
                return;
            }
            Object.defineProperty(item, 'prepend', {
                configurable: true,
                enumerable: true,
                writable: true,
                value: function prepend() {
                    var argArr = Array.prototype.slice.call(arguments),
                        docFrag = document.createDocumentFragment();

                    argArr.forEach(function (argItem) {
                        var isNode = argItem instanceof Node;
                        docFrag.appendChild(isNode ? argItem : document.createTextNode(String(argItem)));
                    });

                    this.insertBefore(docFrag, this.firstChild);
                }
            });
        });
    })([Element.prototype, Document.prototype, DocumentFragment.prototype]);

    let _jobTitle = window.EB.GetQueryString("JobTitle");
    if (_jobTitle) {
        //the cookie below is being used in an experiment
        window.EB.createCookie("LP_JobTitle", _jobTitle.replace(/%20/g, " ").replace(/-/g, " "), null, window.location.host.substr(window.location.host.indexOf('.')));
    }

    EBErrorCheck();

})(window, document);
function createGuestUser() {
    if (window.RDL.PortalSettings.ConfigurePortal == "16") {
        if (typeof BOLD == "object" && typeof BOLD.Accounts.createGuest == 'function') {
            window.RDL.createUserCallCounter++;
            clearTimeout(window.RDL.createUserTimer);
            window.RDL.createUserTimer = setTimeout(function () {
                window.RDL.createUserCallCounter = 0;
            }, window.RDL.loopTimeGapInSec * 1000);

            if (window.RDL.createUserCallCounter > window.RDL.maxloopCount) {
                // redirect to LP.
                clearAndRedirect("/?forceRedirect=StuckInUserCreation")
            }

            isAccUserCalled = true;
            BOLD.Accounts.createGuest('RWZ', null, location.href).then(function (data) {
                clearInterval(createGuestUserTimer);
                PostGuestCreated(data.GuestUserID);
            }, function (error) {
                clearInterval(createGuestUserTimer);
                clearAndRedirect("/?forceRedirect=StuckInUserCreation");
            });
            clearInterval(createGuestUserTimer);
        }
    }
    else {
        if (typeof CreateGuestUser == 'function') {
            // indexedDB.deleteDatabase("document")
            var refCookieId = "14";
            var refCookie = window.EB.readCookie("ref");
            if (refCookie != null && refCookie != undefined) {
                refCookieId = refCookie
            }

            window.RDL.createUserCallCounter++;
            clearTimeout(window.RDL.createUserTimer);
            window.RDL.createUserTimer = setTimeout(function () {
                window.RDL.createUserCallCounter = 0;
            }, window.RDL.loopTimeGapInSec * 1000);

            if (window.RDL.createUserCallCounter > window.RDL.maxloopCount) {
                // redirect to LP.
                clearAndRedirect("/?forceRedirect=StuckInUserCreation")
            }

            isAccUserCalled = true;
            CreateGuestUser(window.RDL.PortalSettings.ConfigurePortalCd, window.RDL.Paths.AccountsURL, refCookieId);
            clearInterval(createGuestUserTimer);
        }
    }
}

function generateClaims() {
    if (typeof setguestuserclaims == 'function') {
        setguestuserclaims(userUIdFrmExtrnlSite, 'RWZ', window.RDL.Paths.AccountsURL);
        clearInterval(generateClaimsTimer);
    }
}

var configPath = environment != "stg" && environment != "builder" && environment != "www" ? "https://lccontentdev.blob.core.windows.net/"
    : "https://content.livecareer.com/";


function handleClaims(claims, resolve) {
    var url = window.location.origin + location.pathname;
    var cookieEnabledCheck = (((window.RDL.PortalSettings.ConfigurePortal == "16" || window.RDL.PortalSettings.ConfigurePortal == "20" || window.RDL.isINTL) && navigator.cookieEnabled) || window.RDL.PortalSettings.ConfigurePortal == "3" || window.RDL.PortalSettings.ConfigurePortal == "79" || window.RDL.PortalSettings.ConfigurePortal == "84");
    window.EB.delete_cookie('claimsTrace', window.RDL.selectedPortal.cookieDomain);
    if (url.endsWith('/'))
        url = url.substr(0, url.length - 1);


    if (claims.user_uid != null && claims.user_uid != '' && cookieEnabledCheck) {
        window.RDL.userId = claims.user_uid;
        window.RDL.partyID = claims.partyid;
        window.RDL.UserClaims = claims;
        window.RDL.ContinentCode = claims.continentCode;
        userClaims = claims;
        if (url.endsWith(window.RDL.Paths.BasePath) && !isTemplateFlow()) {
            if (claims.role == "Guest") {
                PostGuestCreated(claims.user_uid, 'claim');
            }
            else if (!window.RDL.executeWizardFlow) {
                // For Reg user - skip HIW n move to next page
                document.getElementById('page-loader').classList.remove('hide');
                clearInterval(packageLoaded);
                packageLoaded = setInterval(function () { moveForward(claims); }, 200);
            }
        }
        else {
            hideHowItWorks();
        }
    }
    else {
        if (window.RDL.selectedPortal && window.RDL.selectedPortal.createGuestUser) {
            var guestUserId = window.EB.readCookie("guestUserId");
            window.RDL.userId = guestUserId;
            if (guestUserId == null || guestUserId == "" || window.EB.readCookie(BoldAuthCookieName) == null) {
                if (window.RDL.selectedPortal && window.RDL.selectedPortal.isThirdPartySite) {
                    userUIdFrmExtrnlSite = window.EB.readCookie("useruid");
                    if (userUIdFrmExtrnlSite) {
                        window.EB.GenerateClaims();
                    } else {
                        window.EB.CreateGuestUser();
                    }
                }
                else {
                    if (isAccUserCalled && (window.RDL.PortalSettings.ConfigurePortal == "16" || window.RDL.PortalSettings.ConfigurePortal == "3")) {
                        // redirect to LP.
                        clearAndRedirect("/?forceRedirect=claimNotFound")
                    } else {
                        window.EB.CreateGuestUser();
                    }
                }
            }
            else {
                PostGuestCreated(guestUserId, 'claim');
            }
        }
        else {
            if (window.RDL.isINTL) {
                bGuestUserCreated = false;
                if (navigator.cookieEnabled) {
                    if (window.EB.GetQueryString('frmbldr') == '1')
                        window.location.href = window.location.origin;
                    else {
                        var propQueryString = window.location.search; //adding UTM Parameters
                        if (propQueryString.length == 0)
                            propQueryString = "?wizard=true&productid=17";
                        window.location.href = "/membership/RegisterGuestUser.aspx" + propQueryString + "&frmbldr=1";
                    }
                }
                else
                    window.location.href = window.location.origin;
            }
        }
    }
    if (resolve)
        resolve('');
}

var funcPointer;
function handleConfig(data, resolve) {
    window.RDL.Paths.BaseUrl = data.externalLinks.dashboardLink;
    window.RDL.Paths.CDN_Path1 = data.externalLinks.cdnPath1;
    window.RDL.Paths.CDN_Path2 = data.externalLinks.cdnPath2;
    window.RDL.Paths.SellPageUrl = data.externalLinks.paymentLink;
    window.RDL.Paths.AccountsURL = data.externalLinks.accountsURL;
    window.RDL.Paths.ResumeCheckUrl = data.externalLinks.resumeCheckUrl;
    window.RDL.Paths.mpcvBuilderLink = data.externalLinks.mpcvBuilderLink;

    window.RDL.Paths.forgetPwdLink = data.externalLinks.forgetPwdLink;

    window.RDL.Paths.TermsOfUseLink = data.externalLinks.termsOfUseLink;
    window.RDL.Paths.PrivacyPolicyLink = data.externalLinks.privacyPolicyLink;
    window.RDL.Paths.ContactusLink = data.externalLinks.contactusLink;
    RDL.PortalSettings.defaultPortalType = "3";
    RDL.PortalSettings.ConfigurePortal = data.portalID;
    RDL.PortalSettings.AuthCookieName = data.authCookieName;
    RDL.PortalSettings.ConfigurePortalCd = data.portalCD;
    RDL.PortalSettings.ConfigurePortalName = data.portalName;
    RDL.PortalSettings.ConfigureProductId = data.productID;
    RDL.PortalSettings.ConfigureProductCd = data.productCD;
    RDL.PortalSettings.ShareResumeURL = data.externalLinks.shareUrl;
    RDL.PortalSettings.SignInUrl = data.externalLinks.signInUrl;
    window.RDL.VisitorApiSetting.JSURL = data.externalLinks.visitorAPIUrl;
    window.RDL.VisitorApiSetting.EnvMode = data.environment;
    window.RDL.VisitorApiSetting.PRODUCT_CODE = data.productCD;
    window.RDL.VisitorApiSetting.AccountCode = data.clientCD;
    window.RDL.segmentKey = data.segmentKey;
    window.RDL.googleMapsKey = data.googleMapsKey;
    window.RDL.iterableAPIKey = data.iterableAPIKey;
    window.RDL.GoogleMapsDebounceTime = data.googleMapsDebounceTime;
    window.RDL.BestJobMatchDelayTime = data.bestJobMatchDelayTime;
    window.RDL.GoogleLoginClientID = data.googleLoginClientID;
    window.RDL.GoogleMapsChannelParams = data.googleMapsChannelParams;
    window.RDL.FacebookAppId = data.facebookAppId;
    window.RDL.cultureCD = data.languageCulture;
    window.RDL.IsLCSEOFlow = false;
    window.RDL.RenewSuspendedSubscription = data.externalLinks.renewSuspendedSubscription;
    window.RDL.CoverLetterUrl = data.externalLinks.coverLetterUrl;
    window.RDL.EB3DownloadUrl = data.externalLinks.eb3DownloadUrl;
    window.RDL.EB4DownloadUrl = data.externalLinks.eb4DownloadUrl;
    window.RDL.ResumeReviewUrl = data.externalLinks.resumeReviewUrl;
    window.RDL.ResumeWritingUrl = data.externalLinks.resumeWritingUrl;
    window.RDL.styleSheetName = data.styleSheetName;
    window.RDL.multiColumnStyleSheetName = data.multiColumnStyleSheetName;
    window.RDL.enableCompanyAPIForUS = data.enableCompanyAPIForUS;
    window.RDL.configServiceBlobUrl = data.externalLinks.configSvcBlobUrl;
    window.RDL.trackExperimentsFromAPI = data.trackExperimentsFromAPI ? data.trackExperimentsFromAPI : false;
    window.RDL.Experiments = data.experiments;
    window.RDL.IsRegViewChange = data.portalID == "16" && data.IsRegViewChange;
    //window.RDL.ResumePreview = { showPreview: data.showResumePreview === true ? true : true, previousState: [] };
    window.RDL.intentcdMapping = data.intentcdMapping;
    window.RDL.ResumePreview = { showPreview: data.showResumePreview === true ? true : false, previousState: [] };
    window.RDL.enableDirectFlow = data.enableDirectFlow;
    window.RDL.useGoogleWidget = data.useGoogleWidget;
    RDL.enableResumeTitle = data.enableResumeTitle ? data.enableResumeTitle : false;
    window.RDL.MPCVResumeTitleTestEnabled = RDL.enableResumeTitle ? RDL.enableResumeTitle : false;
    //Zety Specific
    window.RDL.googleMapappendGTMQueryStringsKey = data.appendGTMQueryString;

    var templateFlow = window.EB.GetQueryString('templateflow');
    var docID = window.EB.GetQueryString('docid')
    if (templateFlow && templateFlow.toLowerCase() == 'contact' && docID) {
        window.RDL.enableDirectFlow = false;
    }

    window.RDL.IsOptimizelyEnabled = data.optimizelyEnabled != undefined ? Boolean(data.optimizelyEnabled) : true;
    window.RDL.maxloopCount = data.maxloopCount ? data.maxloopCount : RDL.maxloopCount;
    //window.RDL.UserConsent = !data.checkUserConsent;
    if (window.RDL.isINTL) {
        window.RDL.UserConsent = data.checkUserConsent;
        window.RDL.First_Name = data.firstName;
        window.RDL.Last_Name = data.lastName;
        window.RDL.nonProfileSkins = "MLT7 MLT6 MLU4 MLU6 MLU5 MLU7 MLF1 MLF2 MLF3 MLF4 MLF5 MLF6";
        window.RDL.nonProfilePhotoSkins = "MLU4 MLU6 MLU5 MLU7 MLF1 MLF2 MLF3 MLF4 MLF5 MLF6";
        window.RDL.intlPhotoSkins = "ATA1 MTA3 MCA2 MLU4 MLU6 MLU5 MLU7 MLF1 MLF2 MLF3 MLF4 MLF5 MLF6";
        window.RDL.convertedSkins = ""; window.RDL.senderEmail = data.fromEmail;
        window.RDL.useGoogleWidget = true;
        window.RDL.showExtraDetails = data.enableAdditionalFields || false;
    }
    else {
        window.RDL.nonProfileSkins = " ";
        window.RDL.nonProfilePhotoSkins = " ";
        window.RDL.intlPhotoSkins = " ";
        window.RDL.convertedSkins = "";
        window.RDL.UserConsent = !data.checkUserConsent;
    }


    if (!window.RDL.UserConsent) {
        window.RDL.UserConsent = document.cookie.search(/consent=1/) > -1;
    }
    //This is for INTL only
    if (RDL.PortalSettings.ConfigurePortalCd == "MUK") {
        window.RDL.enableTTCAutomation = data.enableTTCAutomation;
        window.RDL.enableManageWH = data.enableManageWH;
        window.RDL.enableConfigBlobSkins = false;
    } else if (RDL.PortalSettings.ConfigurePortalCd == "MBR" || RDL.PortalSettings.ConfigurePortalCd == "MIT") {
        window.RDL.enableConfigBlobSkins = data.enableConfigBlobSkins;
        window.RDL.enableManageWH = true;
    }
    else if (RDL.PortalSettings.ConfigurePortalCd == "MES" && data.enableFreshChat == true) {
        window.RDL.freshChatToken = data.freshChatToken;
        window.RDL.freshChatTag = data.freshChatTag;
        window.OpenFreshDesk = window.OpenFreshChat;
        window.RDL.enableManageWH = true;
    }
    else {
        window.RDL.enableTTCAutomation = false;

        if (window.RDL.isINTL) {
            window.RDL.enableManageWH = true;
        }
        else {
            window.RDL.enableManageWH = false;
        }

        window.RDL.enableConfigBlobSkins = false;
    }
    //calling HIW after variables initialization
    // if (window.RDL.isINTL) {
    //     window.EB.HowItWorks();
    // }

    if (data.enableNewRelic && window.RDL.isINTL) {
        addNewRelic(data.newRelicApplicationID);
    }
    segmentKey = data.segmentKey;

    if (!window.RDL.isINTL) {
        data.skins.forEach(function (s) {
            s.blobUrl = data.externalLinks.configSvcBlobUrl + "SkinImages/" + s.skinCD.toLowerCase() + (s.skinCD.startsWith("SRZ") || s.skinCD.startsWith("TRZ") || s.skinCD.startsWith("SRN") || s.skinCD.startsWith("TRN") ? ".png" : ".svg");
            s.imageURL = data.externalLinks.configSvcBlobUrl + "SkinImages/" + s.skinCD.toLowerCase() + (s.skinCD.startsWith("SRZ") || s.skinCD.startsWith("TRZ") || s.skinCD.startsWith("SRN") || s.skinCD.startsWith("TRN") ? ".png" : ".svg");
            s.htmlURL = data.externalLinks.configSvcBlobUrl + s.skinCD + ".htm";
        });
    }
    else if (window.RDL.enableConfigBlobSkins) {
        data.skins.forEach(function (s) {
            s.blobUrl = data.externalLinks.configSvcBlobUrl + "mpintl/" + portalCode + "/SkinImages/" + s.skinCD.toLowerCase() + ".svg";
            s.imageURL = data.externalLinks.configSvcBlobUrl + "mpintl/" + portalCode + "/SkinImages/" + s.skinCD.toLowerCase() + ".svg";
            s.htmlURL = data.externalLinks.configSvcBlobUrl + s.skinCD + ".htm";
        });
    }
    else {
        data.skins.forEach(function (s) {
            s.blobUrl = configPath + portalCode + s.blobURL;
            s.imageURL = configPath + portalCode + s.imageURL;
            s.htmlURL = configPath + portalCode + s.htmlURL;
        });
    }

    if (data.skins && data.skins.length > 0) {
        if (window.RDL.isINTL) {
            // data.skins.sort(function (a, b) {
            //     var x = a.SortIndex; var y = b.SortIndex;
            //     return ((x < y) ? -1 : ((x > y) ? 1 : 0));
            // });
        }
        else {
            data.skins.sort(function (a, b) { return parseInt(a.sortIndex) - parseInt(b.sortIndex) });
        }
    }
    //data.skins.sort(function (a, b) { return parseInt(a.sortIndex) - parseInt(b.sortIndex) });
    window.RDL.Skins = data.skins;

    window.RDL.ExternalJavascripts = data.externalJavascripts;
    window.RDL.oldUrl = data.externalLinks.oldEditorUrl;
    window.RDL.date = (new Date(data.prodDate));

    SetCommonSetings(RDL.PortalSettings.ConfigurePortal);
    SetABTestIds(data.experiments);
    configLoaded = true;
    window.RDL.IsGDPREnable = data.Enable_GDPR;
    window.RDL.googleRecaptchaSiteKey = data.googleRecaptchaSiteKey;


    var logoptimizelyevents = window.EB.GetQueryString('logoptimizelyevents');
    window.RDL.LogOptimizelyEvents = true;
    if (logoptimizelyevents && logoptimizelyevents.toLowerCase() == 'false') {
        window.RDL.LogOptimizelyEvents = false;
    }

    if (window.EB.GetQueryString('pagebreak') == 'show')
        window.RDL.showPageBreak = true;

    if (window.EB.readCookie("LP_JobTitle") != null) // for exp
        window.RDL.templateJobTitleMapping = data.templateJobTitleMappingForExp;
    if (RDL.PortalSettings.ConfigurePortalCd == "MPR")
        window.RDL.templatesMappingToExprLevel = data.templatesMappingToExprLevel;

    try {
        try {
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = window.RDL.VisitorApiSetting.JSURL;
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'visitor-jssdk'));
        }
        catch (e) {
            //alert("Error in JS");

        }

        function callTrackingApi() {
            if (typeof TS != 'undefined') {
                TS.Track(window.RDL.VisitorApiSetting.PRODUCT_CODE, window.RDL.VisitorApiSetting.AccountCode, true, true);
                clearInterval(funcPointer);
            }
        }
        function callVisitInfoLogApi() {
            var visitIntentCd = window.EB.readCookie('vsintentcd');
            if (visitIntentCd != null && visitIntentCd != "") {
                window.RDL.executeWizardFlow = window.RDL.enableDirectFlow;
            }

            if (!!getBuilderStep()) {
                window.RDL.executeWizardFlow = window.RDL.enableDirectFlow;
            }

            clearInterval(showAffiliateTimer);
            showAffiliateTimer = setInterval(function () {
                ShowAffiliateFlow(window.RDL.userId);
            }, 200);
            if (resolve)
                resolve('');
        }
        clearInterval(funcPointer);
        funcPointer = setInterval(callTrackingApi, 200);
        callVisitInfoLogApi();
    }
    catch (e) {
        console.log("error in visitlog");
    }

    if (window.EB.readCookie("intlEnlargePreview") != null) {
        var intlEnlaregPreview = window.EB.readCookie("intlEnlargePreview");
        if (intlEnlaregPreview == 3) {
            document.getElementsByTagName("html")[0].classList.add("enlarge-preview");
        }
    }
    setInterval(function () {
        window.EB.IsUserExist();
    }, 15 * 60 * 1000);
}


function handleLocalizedText(data, resolve) {
    var isMpr = (window.RDL.PortalSettings.ConfigurePortal == "16") ? true : false;
    var isLC = (window.RDL.PortalSettings.ConfigurePortal == "3") ? true : false;
    window.RDL.localizedText = data.localizedtext;
    if (portalCode != 'muk' && portalCode != 'mfr' && portalCode != 'mes' && portalCode != 'mbr' && portalCode != 'mit' && portalCode != 'mar' && portalCode != 'mcl' && portalCode != 'mmx' && portalCode != 'mpe') {
        window.RDL.localizedText.Education_GraduationStartYear_lbl = "GRADUATION START YEAR";
        window.RDL.localizedText.gradStartYear_Label = "Graduation Start Year";
        window.RDL.localizedText.large_Graduation_StartYear_Text = "Oops, your graduation start year should be less than your graduate year.";
        window.RDL.localizedText.font_typeBold = "Bold";
        window.RDL.localizedText.font_typeItalic = "Italic";
        window.RDL.localizedText.font_typeUnderline = "Underline";
        window.RDL.localizedText.font_typeBulletList = "BulletList";
        window.RDL.localizedText.url_select_template = "/choose-template";
        window.RDL.localizedText.url_select_resume = "/select-resume";
        window.RDL.localizedText.Undo = "Undo";
        window.RDL.localizedText.Redo = "Redo";
        window.RDL.localizedText.RedochooseTemp_Label = "Redo";
        window.RDL.localizedText.skillTips_Text = "Tips for Skills";
        window.RDL.localizedText.url_final_resume = "/final-resume";
        window.RDL.localizedText.WhereYouWorked_text = "You are almost done - Provide your Work History";
        window.RDL.localizedText.worked_subheading = "Let employers see where you’ve worked before";
        window.RDL.localizedText.subheading_Education = "Include every school, even if you're still there or didn't graduate.";
        window.RDL.localizedText.subheading_Skills = "Use our expert recommendations below to get started.";
        window.RDL.localizedText.backgroundSummary_Text = "Briefly tell us about your background";
        window.RDL.localizedText.subheading_Summary = "Use our expert recommendations below to get started.";
        window.RDL.localizedText.placeholder_Experience = "Type in your responsibilities, achievements and job details.";
        window.RDL.localizedText.placeholder_Experience_enlargePreview = "Type in your responsibilities, achievements and job details.";
        window.RDL.localizedText.placeholder_Skills1 = "Your skills will appear in 2 columns.Type in the skills you want to highlight in the first column.";
        window.RDL.localizedText.placeholder_Skills2 = "Type in additional skills you want to highlight in the second column.";
        window.RDL.localizedText.placeholder_Summary = "Write your summary here.";
        window.RDL.localizedText.letslist = "";
        window.RDL.localizedText.placeholder_fname = "e.g. John";
        window.RDL.localizedText.placeholder_lname = "e.g. Smith";
        window.RDL.localizedText.placeholder_rsmTitle = "e.g. Sr. Accountant";
        window.RDL.localizedText.placeholder_strtAddress = "e.g. 123 Main Street, Unit #5";
        window.RDL.localizedText.placeholder_citytown = "e.g. San Francisco";
        window.RDL.localizedText.placeholder_county = "e.g. California or CA";
        window.RDL.localizedText.placeholder_county_enlargePreview = "e.g. CA";
        window.RDL.localizedText.placeholder_pcode = "e.g. 94102";
        window.RDL.localizedText.placeholder_hphn = "e.g. 415-555-5555";
        window.RDL.localizedText.placeholder_cphn = "e.g. 415-555-5555";
        window.RDL.localizedText.placeholder_email = "e.g. johnsmith@gmail.com";
        window.RDL.localizedText.placeholder_jtitle = "e.g. Customer Service Representative";
        window.RDL.localizedText.placeholder_employer = "e.g. ACME Technologies";
        window.RDL.localizedText.placeholder_instname = "e.g. San Jose State";
        window.RDL.localizedText.placeholder_instloc = "e.g. San Jose";
        window.RDL.localizedText.placeholder_fldofstudy = "e.g. Accountant";
        window.RDL.localizedText.placeholder_gradyear = "e.g. 2010";
        window.RDL.localizedText.stateProvince1_Label_enlargePreview = "State";
        window.RDL.localizedText.contact_heading_enlargePreview = "Let's complete your";
        window.RDL.localizedText.contact_heading_bold_enlargePreview = "Resume Heading";
        window.RDL.localizedText.welcomBack = "Welcome back";
        window.RDL.localizedText.welcomBackContinueMsg = "Do you want to continue building your Resume?";
        window.RDL.localizedText.label_myresume = "MY RESUMES";
        window.RDL.localizedText.label_continue = "CONTINUE";
        window.RDL.localizedText.jobalert = "Yes, I would l​ike job search tips and free email job alerts that match my resume";
        window.RDL.localizedText.resume_Selectres_ScreenTitle = "Resume Option - ";
        window.RDL.localizedText.resume_Finalize_ScreenTitle = "Finalize Resume - ";
        window.RDL.localizedText.alertLogin = "Yes, I would like job search tips and free email job alerts that match my resume";
        window.RDL.localizedText.url_career_information = "/industry-title";
        window.RDL.localizedText.url_contact = "/contact";
        window.RDL.localizedText.url_login = "/login";
        window.RDL.localizedText.url_work_history = "/experience";
        window.RDL.localizedText.url_education = "/education";
        window.RDL.localizedText.url_skills = "/skills";
        window.RDL.localizedText.url_summary = "/summary";
        window.RDL.localizedText.url_final_resume = "/final-resume";
        window.RDL.localizedText.text_anotherposition = "ADD ANOTHER POSITION";
        window.RDL.localizedText.text_adanotherdegree = "ADD ANOTHER DEGREE";
        window.RDL.localizedText.text_skipandnext = "Skip And Finish Later";
        window.RDL.localizedText.Download = "Download";
        window.RDL.localizedText.Print = "Print";
        window.RDL.localizedText.Email = "Email";
        window.RDL.localizedText.SpellCheck = "Spell Check";
        window.RDL.localizedText.addsection = "Add a section";
        window.RDL.localizedText.applyingtemplate = "Applying Template";
        window.RDL.localizedText.hideTips = "Don't show me tips anymore";
        window.RDL.localizedText.nothanks = "No Thanks";
        window.RDL.localizedText.CanHaveCompany = "Please enter the employer's name.";
        window.RDL.localizedText.CanHaveJobTitle = "Oops, you forgot to enter the Job title.";
        window.RDL.localizedText.CanHaveSchoolName = "Oops, you forgot to enter the school name.";
        window.RDL.localizedText.sure_deleteresume = "Are you sure you want to delete this Resume?";
        window.RDL.localizedText.sure_deletesection = "Are you sure you want to delete this Section?";
        window.RDL.localizedText.emailAddresstext = "Email Address:";
        window.RDL.localizedText.graduation_year = "Graduation Year";
        window.RDL.localizedText.forgotPasswordMPR_Text = 'Forgot Your Password? - ';
        window.RDL.localizedText.url_forgetpassword = '/ForgetPassword';
        window.RDL.localizedText.moreInfo_Text = 'More Information Needed';
        window.RDL.localizedText.topbottommargin_label = "Top & Bottom Margin";
        window.RDL.localizedText.educationplaceholder = "Cliquez ici pour commencer la saisie du descriptif. Vous pouvez également ajouter l'exemple sur la droite en cliquant sur Ajouter.";
        window.RDL.localizedText.rsmName_Text = "Resume Name";
        window.RDL.localizedText.addADesc = "ADD A DESCRIPTION";
        window.RDL.localizedText.placeholder_Skills_single = "Add your skills here.";
        window.RDL.localizedText.dontHaveDegree_Text = "Some College (No Degree)";
        window.RDL.localizedText.color_lbl = isMpr ? "Color" : "Colors";
        window.RDL.localizedText.resumeLookLike_Text_html = "What do you want your <b>resume</b> to look like?";
        window.RDL.localizedText.lblEnterEndDate = "Please enter an End Date";
        window.RDL.localizedText.lblEnterStartDate = "Please enter a Start Date";
        window.RDL.localizedText.Education_Degree = "e.g. Bachelor's";
        window.RDL.localizedText.Education_Summary = "Education summary";
        window.RDL.localizedText.ExperienceDescription_subheading = "Use our expert recommendations below to get started.";
        window.RDL.localizedText.Experience_DescriptionHeading1 = "What did you do at ";
        window.RDL.localizedText.Experience_DescriptionHeading2 = " as ";
        window.RDL.localizedText.placeHolderText_accm = "Write about your accomplishments here.";
        window.RDL.localizedText.placeHolderText_affi = "Add your affiliations here.";
        window.RDL.localizedText.placeHolderText_cert = "Add your certifications here.";
        window.RDL.localizedText.placeHolderText_intr = "Add your interests here.";
        window.RDL.localizedText.placeHolderText_lang = "Add your languages here.";
        window.RDL.localizedText.placeHolderText_sftr = "Add your software skills here.";
        window.RDL.localizedText.placeHolderText_addi = "Add your details here.";
        window.RDL.localizedText.subheading_acc0 = "Tell us about your accomplishments";
        window.RDL.localizedText.subheading_acc1 = "Use our expert recommendations below to get started.";
        window.RDL.localizedText.subheading_aff0 = "What are your affiliations?";
        window.RDL.localizedText.subheading_aff1 = "";
        window.RDL.localizedText.subheading_cer0 = "What certifications do you have?";
        window.RDL.localizedText.subheading_cer1 = "";
        window.RDL.localizedText.subheading_addi0 = "Additional information";
        window.RDL.localizedText.subheading_addi1 = "Add anything else you want employers to know.";
        window.RDL.localizedText.subheading_oth0 = "Tell us about your ";
        window.RDL.localizedText.subheading_oth1 = "";
        window.RDL.localizedText.flgEnabledSplit = false;
        window.RDL.localizedText.ttcSearchEnhanceMent_searcJobTitle = "Search by job title";
        window.RDL.localizedText.ttcSearchEnhanceMent_AutosuggestPlaceHolderText = "Ex: Cashier";
        window.RDL.localizedText.ttcSearchEnhanceMent_searchDescription = (isMpr || isLC) ? "Search descriptions by job title" : "Search descriptions";
        window.RDL.localizedText.ttcSearchEnhanceMent_searchskills = (isMpr || isLC) ? "Search skills by job title/keyword" : "Search skills";
        window.RDL.localizedText.ttcSearchEnhanceMent_searchSummary = (isMpr || isLC) ? "Search summary by job title" : "Search summary";
        window.RDL.localizedText.ttcSearchEnhanceMent_searchAccm = "Search accomplishments";
        window.RDL.localizedText.ttcSearchEnhanceMent_searchCert = "Search certifications";
        window.RDL.localizedText.ttcSearchEnhanceMent_searchAfil = "Search affiliations";
        window.RDL.localizedText.ttcSearchEnhanceMent_showDescription_for = "Showing descriptions for ";
        window.RDL.localizedText.ttcSearchEnhanceMent_showDescription = "Showing descriptions";
        window.RDL.localizedText.ttcSearchEnhanceMent_showSkills_for = "Showing skills for ";
        window.RDL.localizedText.ttcSearchEnhanceMent_showSkills = "Showing skills";
        window.RDL.localizedText.ttcSearchEnhanceMent_showSummary_for = "Showing summary for ";
        window.RDL.localizedText.ttcSearchEnhanceMent_showSummary = "Showing summary";
        window.RDL.localizedText.ttcSearchEnhanceMent_showAccm_for = "Showing accomplishments for ";
        window.RDL.localizedText.ttcSearchEnhanceMent_showAccm = "Showing accomplishments";
        window.RDL.localizedText.ttcSearchEnhanceMent_showCert_for = "Showing certifications for  ";
        window.RDL.localizedText.ttcSearchEnhanceMent_showCert = "Showing certifications";
        window.RDL.localizedText.ttcSearchEnhanceMent_showAfil_for = "Showing affiliations for ";
        window.RDL.localizedText.ttcSearchEnhanceMent_showAfil = "Showing affiliations";
        window.RDL.localizedText.download_file_name_tip = "Tip: Don't use numbers when naming your file.";
        window.RDL.localizedText.edit_workhistory_html = "<span class ='font-weight-normal'>Edit</span> This Work History";
        window.RDL.localizedText.add_work_history_html = "<span className='font-weight-normal'>Add</span> Work History";
        window.RDL.localizedText.previewOnly = "FOR PREVIEW ONLY";
        window.RDL.localizedText.previewFinalizeLater = "You will be able to finalize your resume later";
        window.RDL.localizedText.url_experience_level = "/experience-level";
    }
    else {
        window.RDL.localizedText.flgEnabledSplit = false;
    }

    if (resolve)
        resolve('');
}

var claimsPromise = undefined;
var configPromise = undefined;
var resourcePromise = undefined;

var url = window.location.origin + location.pathname;
if (url.endsWith('/'))
    url = url.substr(0, url.length - 1);

var loaderElement = document.getElementById('page-loader');
if (isTemplateFlow() || !!window.EB.GetQueryString('builderstep') || !url.endsWith(window.RDL.Paths.BasePath)) {
    loaderElement && loaderElement.classList.remove('hide'); // show loader
    document.getElementsByTagName("body")[0].classList.remove("page-how-it-works");
}
else {
    loaderElement && loaderElement.classList.add('hide'); // hide loader
    document.getElementsByTagName("body")[0].classList.add("page-how-it-works");
}

if (isTemplateFlow()) {
    claimsPromise = new Promise(function (resolve, reject) {
        window.RDL.howItWorksLoad = 1;
        resolve();
    })
}
else {
    claimsPromise = new Promise(function (resolve, reject) {
        window.RDL.howItWorksLoad = 1;
        window.EB.Claims(handleClaims, true, resolve);
    })
}


configPromise = new Promise(function (resolve, reject) {
    var configUrl = configPath + portalCode + "/config/" + getConfigName(environment) + ".js";
    var buildVersion = getCurrentVersion().replace(".js", "");
    if (buildVersion != "1.0.0") {
        configUrl = configUrl + "?v=" + buildVersion;
    }
    EB.CallAjax(configUrl, "GET", null, true, false, handleConfig, resolve);
})

resourcePromise = new Promise(function (resolve, reject) {
    EB.CallAjax(configPath + portalCode + "/Resources/" + getConfigName(environment) + ".json", "GET", null, true, false, handleLocalizedText, resolve);
});
function handleLCTemplateFlow() {
    var loginJSsrc = getAccountsLoginURL(environment);
    if (EB.GetQueryString("templateflow") && window.RDL.currentUrl.indexOf(RDL.LCDOTCom) > -1) {
        document.getElementById('howItWorks').classList.add("d-none");
        document.getElementById('page-loader').classList.remove('hide');
        if (isIE10() || isIE11() || isEdge()) {
            return;
        }
        EB.LoadJsFile("https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js", true, function () {
            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = loginJSsrc;
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'accounts-js'));
        });
    }
}
function getAccountsLoginURL(environment) {
    var url = "/scripts/v3/login.min.js?v=2";
    var AccountsURL = "https://accounts.livecareer.com";
    switch (environment) {
        case "regression":
        case "reg":
        case "reg-stg":
            AccountsURL = "https://reg-accounts.livecareer.com";
            break;
        case "stg":
            AccountsURL = "https://stg-accounts.livecareer.com";
            break;
        case "perf":
            AccountsURL = "https://api-perf-accounts.livecareer.com";
            break;
        case "www":
            AccountsURL = "https://accounts.livecareer.com";
            break;
        case "local":
        case "qa":
            AccountsURL = "https://qa-accounts.livecareer.com";
            break;
    }
    window.RDL.Paths.AccountsURL = window.RDL.Paths.AccountsURL || AccountsURL;
    return AccountsURL + url;
}

// if(!isTemplateFlow())
//     handleLCTemplateFlow();

Promise.all([claimsPromise, configPromise, resourcePromise]).then(function (data) {
    RDL.claimsLoaded = true;
    if (window.RDL.pageLoaded) {
        handlePostPageLoad(true);
    }
    else {
        clearInterval(pageLoadTimer);
        pageLoadTimer = setInterval(function () {
            if (window.RDL.pageLoaded) {
                clearInterval(pageLoadTimer);
                handlePostPageLoad(true);
            }
        }, 200);
    }
});


function SetABTestIds(experiments) {
    if (experiments != null && experiments != undefined) {
        experiments.forEach(function (element) {
            switch (element.id) {
                case "6617092d-21cc-4b99-acb0-40aef185996b"://Registration Redesign for MPR EB
                    window.RDL.MPR_Registration_Redesign_ABTest_Id = element.id;
                    window.RDL.MPR_Registration_Redesign_ABTest_Name = element.name;
                    break;
                case "70e77e0c-208f-4cf2-942a-d716aacd008b"://MPR Update Sign Up Flow
                    window.RDL.MPR_LoginAfterChooseTemplate_ABTest_Id = element.id;
                    window.RDL.MPR_LoginAfterChooseTemplate_ABTest_Name = element.name;
                    break;
                case "c479cd12-8e1c-49d1-b651-7e42c538ef67"://Enlarge Preview Experiment for MPR EB
                    window.RDL.MPR_EnlargeResumePreview_ABTest_Id = element.id;
                    window.RDL.MPR_EnlargeResumePreview_ABTest_Name = element.name;
                    break;
                case "6d47fd1d-ca53-4e3a-af88-9867837ff89c"://Shrink Preview Experiment for MPR EB
                    window.RDL.MPR_ShrinkPreview_ABTest_Id = element.id;
                    window.RDL.MPR_ShrinkPreview_ABTest_Name = element.name;
                    break;
                case "59964efd-1dca-4db5-955d-bb9ee53f3fd8": //UK
                    window.RDL.MPCV_OnePageChooseTemplate_ABTest_Id = element.id;
                    window.RDL.MPCV_OnePageChooseTemplate_ABTest_Name = element.name;
                    break;
                case "4940ef73-d461-41f8-ba67-6b8e41132f7c":
                    window.RDL.LCA_MoveRegistration_InUpload_ABTest_Id = element.id
                    window.RDL.LCA_MoveRegistration_InUpload_ABTest_Name = element.name;
                    break;
                case "5dc8d28f-4790-470f-811e-014a25846bb4":
                    window.RDL.MPR_MoveRegistration_InUpload_ABTest_Id = element.id
                    window.RDL.MPR_MoveRegistration_InUpload_ABTest_Name = element.name;
                    break;
                case "cc4b7a56-9a8c-481a-8292-2ad8af00926d"://LC - Pre-select a template on the "Choose Template" screen (LP-1264)
                    window.RDL.LCA_PreSelect_Template_ABTest_Id = element.id;
                    window.RDL.LCA_PreSelect_Template_ABTest_Name = element.name;
                    break;
                case "beacc896-d5a7-4263-8945-ebe574ded227"://LC - Collecting users name from template selection (LP-1265)
                    window.RDL.LCA_TemplateWithName_ABTest_Id = element.id;
                    window.RDL.LCA_TemplateWithName_ABTest_Name = element.name;
                    break;
                case "ce624d89-1263-41c0-9e2a-af7d60062d03"://LC - Show templates based on job title SEO page (LP-1485)
                    window.RDL.LCA_JobTitleBasedTemplates_ABTest_Id = element.id;
                    window.RDL.LCA_JobTitleBasedTemplates_ABTest_Name = element.name;
                    break;
                case "04f1013d-1e50-44ee-8e49-f9f1b9039e15"://MPR - Collecting users name from template selection (PER-2811)
                    window.RDL.MPR_TemplateWithName_ABTest_Id = element.id;
                    window.RDL.MPR_TemplateWithName_ABTest_Name = element.name;
                    break;
                case "05801e04-1c80-425f-aeda-4f5016bf99bc"://MPR - MPR RWZ Resume Check ABTest (MPR Dashboard non Premium User) (EB-7923)
                    window.RDL.MPR_RWZ_Resume_Check_ABTest_1_Id = element.id;
                    window.RDL.MPR_RWZ_Resume_Check_ABTest_1_Name = element.name;
                    break;
                case "2ced051e-8334-4ac5-9530-d79583bdba70"://MPR - MPR RWZ Resume Check ABTest (MPR Dashboard Premium User) (EB-7923)
                    window.RDL.MPR_RWZ_Resume_Check_ABTest_2_Id = element.id;
                    window.RDL.MPR_RWZ_Resume_Check_ABTest_2_Name = element.name;
                    break;
                case "35620e22-6673-441c-802c-37ad70f397bd": //MPR Enlarge Preview With Templates For Scratch EB-7403
                    window.RDL.MPR_RWZ_Enlarge_With_Templates_Id = element.id;
                    window.RDL.MPR_RWZ_Enlarge_With_Templates_Name = element.name;
                    break;
                case "0fe00bba-7eb1-4f57-ad25-feb8dece174c":
                    window.RDL.MPFR_SkipIndustry_ABTest_Id = element.id;
                    window.RDL.MPR_SkipIndustry_ABTest_Name = element.name;
                    break;
                case "09c0450e-9c28-4649-ba95-4f64f6a48588"://MPR - MPR RWZ Resume Check ABTest (MPR Dashboard Premium User) (EB-7923)
                    window.RDL.MPCV_UKColourPicker_ABTest_Id = element.id;
                    window.RDL.MPCV_UKColourPicker_ABTest_Name = element.name;
                    break;
                case "68f02276-443f-4ca0-b6a3-02f88e6b0a64"://
                    window.RDL.MPCV_UKColourPicker_ABTest_Id = element.id;
                    window.RDL.MPCV_UKColourPicker_ABTest_Name = element.name;
                    break;
                case "a0a3d77f-8d43-432f-94d5-b231749fb379"://
                    window.RDL.MPCV_UKColourPicker_ABTest_Id = element.id;
                    window.RDL.MPCV_UKColourPicker_ABTest_Name = element.name;
                    break;
                case "2d0f3e20-5bb7-4c89-9f72-4f02e23ce14e"://
                    window.RDL.MPCV_UKColourPicker_ABTest_Id = element.id;
                    window.RDL.MPCV_UKColourPicker_ABTest_Name = element.name;
                    break;
                case "3a8a2232-d0a4-4fbb-b8da-0f4bd9ee2cf8"://
                    window.RDL.MPCV_UKColourPicker_ABTest_Id = element.id;
                    window.RDL.MPCV_UKColourPicker_ABTest_Name = element.name;
                    break;
                case "0a5e2e36-d607-494b-a2c6-7309d889e0fe"://
                    window.RDL.MPR_SELL_CHECKOUT_Modal_Id = element.id;
                    window.RDL.MPR_SELL_CHECKOUT_Modal_Name = element.name;
                    break;
                case "ffa5c1f7-e16e-4aff-99b9-566ec0ff8e77":
                case "807de2db-dbd5-4871-8c56-3128b78a6d56":
                    window.RDL.INTL_enlargePreview_ABTest_Id = element.id;
                    window.RDL.INTL_enlargePreview_ABTest_Name = element.name;
                    break;
                case "d14cb0d6-beda-4085-ba2e-06209e35f71a":
                case "bb395c4f-48e1-425f-8888-14cc7b2772ee":
                case "718a3c4c-8421-4cf1-87ea-e108d0a5cfa8":
                case "134b70b4-6354-4e98-aa68-02b63b4d330b":
                    window.RDL.MPCV_SkipIndustry_TTCABTest_Id = element.id;
                    window.RDL.MPCV_SkipIndustry_TTCABTest_Name = element.name;
                    window.RDL.SkipIndTTCABTestEnabled = true;
                    break;
                case "a489ded1-5d7e-426a-8070-179fbfd52639"://MPR - Pre-select Template to MPR (PER-3238)
                    window.RDL.MPR_PreSelectTemplate_ABTest_Id = element.id;
                    window.RDL.MPR_PreSelectTemplate_ABTest_Name = element.name;
                    break;
                case "f70c00f8-d92a-4231-95c2-8de727c64a47": //Move education after contact page (EB-8584)
                    window.RDL.MPR_Move_EDUC_After_CNTC_ABTest_Id = element.id;
                    window.RDL.MPR_Move_EDUC_After_CNTC_ABTest_Name = element.name;
                    break;
                case "8e97653e-1bc7-4bab-831a-b8df1a7642ae": // LP-1777
                    window.RDL.LCA_RETURNING_VISITOR_REGISTRATION_ABTest_Id = element.id;
                    window.RDL.LCA_RETURNING_VISITOR_REGISTRATION_ABTest_Name = element.id;
                    break;
                case "e00e3afb-8b45-4e96-9751-13c27cd18839"://PER-3411 Experience Questions Personalization Test
                    window.RDL.MPR_ExperienceLevel_ABTest_Id = element.id;
                    window.RDL.MPR_ExperienceLevel_ABTest_Name = element.name;
                    break;
                case "8a10b729-cf68-479a-a9bf-837b59bb966c":// MPFR Resume title Test
                case "81241664-61d6-4db5-bbd4-f5b5bf7f8d34":// MPES Resume title Test
                    window.RDL.MPCV_ResumeTitle_ABTest_Id = element.id;
                    window.RDL.MPCV_ResumeTitle_ABTest_Name = element.name;
                    window.RDL.MPCVResumeTitleTestEnabled = element.isActive ? element.isActive : false;
                    break;
                case "ae7ececa-72f7-4710-9b16-8669130bae40"://LC - Show popular temples for job title page V2 (LP-2066)
                    window.RDL.LCA_PopularTemplatesForJobTitles_ABTest_Id = element.id;
                    window.RDL.LCA_PopularTemplatesForJobTitles_ABTest_Name = element.name;
                    break;
                case "f604bb97-367d-44af-a9ce-048133d05bb8"://LC - unified progress bar
                    window.RDL.LCA_UnifiedBar_ABTest_Id = element.id;
                    window.RDL.LCA_UnifiedBar_ABTest_Name = element.name;
                    break;
                case "796c5bf1-1e54-4e85-a103-77449725cefc"://LCA RWZ TTC Highlight - EB-9680
                    window.RDL.LCA_TTCHighlight_ABTest_Id = element.id;
                    window.RDL.LCA_TTCHighlight_ABTest_Name = element.name;
                    break;
                case "6c88edc1-fa89-491e-aa1f-ada86c1dc246"://LC - HIW page animation (Visitor experiment in MVC)
                    window.RDL.LCA_HIW_Page_Animation_ABTest_Id = element.id;
                    window.RDL.LCA_HIW_Page_Animation_ABTest_Name = element.name;
                    break;
                case "9c7f769d-5a23-410e-867a-6c4b9e0f498f":
                case "39d0b8eb-e0ef-4696-be4d-36684b8e19df":
                    window.RDL.MPCV_ShowTemplateDrawer_ABTest_Id = element.id;
                    window.RDL.MPCV_ShowTemplateDrawer_ABTest_Name = element.name;
                    window.RDL.isShowTemplateDrawerActive = true;
                    break;
            }
        });
    }
}
function SetCommonSetings(_portalId) {
    if (_portalId == 16 || _portalId == 29) {
        _nRepData['kb'] = _portalId == 16 ? '31311092' : '57219090';
        _nRepData['embed'] = { account: 'livecareer', container: 'nanoRepEmbedContainer', width: 360, maxHeight: 500, dynamicSize: true, cdcFrame: '', cdcVersion: 3, scriptVersion: '2.43.4.2' };
        // _nRepData['embed'] = { account: 'livecareer', container: 'nanorep', width: 360, maxHeight: 500, dynamicSize: true, cdcFrame: '', cdcVersion: 3, scriptVersion: '2.43.4.2' };

    }
}
/*
function getDomain(url, subdomain) {
    subdomain = subdomain || false;
    url = url.replace(/(https?:\/\/)?(www.)?/i, '');
    if (!subdomain) {
        url = url.split('.');

        url = url.slice(url.length - 2).join('.');
    }
    if (url.indexOf('/') !== -1) {
        return url.split('/')[0];
    }
    return url;
}
*/
function getHostName(url) {
    var match = url.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
    if (match != null && match.length > 2 && typeof match[2] === 'string' && match[2].length > 0) {
        return match[2];
    }
    else {
        return null;
    }
}
function getDomain(url, subdomain) {
    var hostName = getHostName(url);
    var domain = hostName;

    if (hostName != null) {
        var parts = hostName.split('.').reverse();

        if (parts != null && parts.length > 1) {
            domain = parts[1] + '.' + parts[0];

            if (hostName.toLowerCase().indexOf('.co.uk') != -1 && parts.length > 2) {
                domain = parts[2] + '.' + domain;
            }
        }
    }

    return domain;
}
function getExperimentVariant(experimentID) {
    var Variant = 0;
    if (window.RDL.ExperimentInfo && window.RDL.ExperimentInfo.length > 0) {
        window.RDL.ExperimentInfo.forEach(function (m) {
            if (m.experimentId == experimentID) {
                Variant = m.variant;
            }
        });
    }
    return Variant;
}

function setVendorBundleLoaded() {
    vendorBundleLoaded = true;
}

function startApp(event) {
    var eventType = ''
    if (event != null) {
        eventType = "Clicked";
        event.preventDefault();
    }

    document.getElementById('page-loader').classList.remove('hide');
    clearInterval(packageLoaded);
    packageLoaded = setInterval(function () { moveForward(userClaims, eventType); }, 200);

}

function moveForward(claims, eventType) {
    if (window.appEntry != undefined && vendorBundleLoaded && configLoaded && (window.RDL.guestUserCreated || window.RDL.skipAuthCookieCheck)) {
        clearInterval(packageLoaded);
        var componentizationVariant = EB.readCookie('componentizationvariant');
        if (componentizationVariant && RDL.UserClaims && RDL.UserClaims.user_uid) {
            EB.TrackEvents("identify", { "Experiment: MPR RWZ Componentization": componentizationVariant == "2" ? "Variability Estimator" : "Baseline" }, window.RDL.userId, false);
            EB.delete_cookie('componentizationvariant', window.RDL.selectedPortal.cookieDomain);
        }
        if (eventType == "Clicked") {
            document.getElementById('howItWorks').classList.add("d-none");
            document.getElementById('upperFooter').classList.add("bg-light");
            document.getElementById('upperFooter').classList.remove('hiw-gradiant');
            document.getElementById('app').style.display = "block";
            window.appEntry.moveForward(claims, window.RDL.guestUserID);
        }
        else {
            var directFlow = window.EB.readCookie('contentcd');
            if ((directFlow == null || directFlow == "")) {
                document.getElementById('howItWorks').classList.add("d-none");
                document.getElementById('upperFooter').classList.add("bg-light");
                document.getElementById('upperFooter').classList.remove('hiw-gradiant');
                document.getElementById('app').style.display = "block";
                window.appEntry.moveForward(claims, window.RDL.guestUserID);
            }
        }
    }
}

function UpdateHiwContainerHeight() {
    var bodyHeight = window.innerHeight,
        headerHeight = document.getElementById('hiwHeader').offsetHeight,
        footerHeight = document.getElementById('footer').offsetHeight;
    var hiwContainerHeight = bodyHeight - (headerHeight + footerHeight);
    document.getElementById("contentHowItWorks").style.height = hiwContainerHeight + "px";
}

function showHowItWorks() {
    if (window.RDL.isINTL) {
        window.EB.TrackUTMParams();
    }
    if (!isHIWEventsFired) {
        isHIWEventsFired = true;
        window.EB.TrackEvents('enter builder', {}, '', false);
        window.EB.TrackOptimizelyEvents("enter builder");
        if (!IsAffiliateTraffic()) {
            window.EB.TrackEvents('builder usage', { 'action': 'viewed', 'screen name': 'create my resume' }, null, false);
        }
    }
    var validTemplateFlow = false;
    var templateFlow = window.EB.GetQueryString('templateflow');
    var hiwBDFlow = window.EB.GetQueryString('bdflow'); //EB-6957
    // var directFlow = window.EB.GetQueryString('rwz-df');
    var directFlow = null;
    if (window.EB.readCookie('contentcd') != null && window.EB.readCookie('contentcd') != "") {
        directFlow = window.EB.readCookie('contentcd');
    }
    var pageName = window.EB.GetQueryString('page');
    if (directFlow || (templateFlow && (templateFlow.toLowerCase() == 'selectresume' || templateFlow.toLowerCase() == 'contact' || templateFlow.toLowerCase() == 'choosetemplate'))) {
        window.EB.createCookie('ShowLegalInResumeOption', "1", null);
        validTemplateFlow = true;
    }
    var loginAfterCTFlow = getExperimentVariant(window.RDL.MPR_LoginAfterChooseTemplate_ABTest_Id) == "3";
    var hiwLoaderAnimation = getExperimentVariant(window.RDL.LCA_HIW_Page_Animation_ABTest_Id) == "3";
    if ((window.EB.readCookie('BDLP') != null && hiwBDFlow == null) || (pageName && pageName.toLowerCase() == "login")
       || hiwLoaderAnimation || window.EB.readCookie('lp') == 'MPRUKZLP06' || validTemplateFlow || loginAfterCTFlow || (document.getElementById("guestUserPrefCode") && document.getElementById("guestUserPrefCode").value == "True")) 
        {
            var isGuestUser = (window.RDL.UserClaims == null) ? true : (window.RDL.UserClaims != null && window.RDL.UserClaims.role.toLowerCase() == "guest" ? true : false);
            if(isGuestUser && hiwLoaderAnimation)
            {
                window.onresize = function () {
                    UpdateHiwContainerHeight();
                };
                //setTimeout(function(){startApp(null);}, 1000);                 
                var hiwAnimation = sessionStorage.getItem("hiwAnimationLoaded");
                if(hiwAnimation)  
                    setTimeout(function(){startApp(null);}, 6000);                
                else
                    setTimeout(function(){startApp(null);}, window.RDL.HiwAnimationTimeOut);                 
            }
            else
            startApp(null);
    }
    else {
        var $contentHowItWorks = document.getElementById("contentHowItWorks");
        window.EB.createCookie('ShowTnCLink', "1", null);
        document.getElementById('howItWorks').classList.remove("d-none");
        $contentHowItWorks.classList.add("body-how-it-works");//Separate add for IE support
        $contentHowItWorks.classList.add("w-100");
        $contentHowItWorks.classList.add("hiw-gradiant");
        if (window.RDL.LowerVersionBroswer != null && window.RDL.LowerVersionBroswer == false) {
            $contentHowItWorks.classList.remove("d-none");
        }
        UpdateHiwContainerHeight();
        window.onresize = function () {
            UpdateHiwContainerHeight();
        };
        document.getElementById('upperFooter').classList.add("hiw-gradiant");
        document.getElementById('upperFooter').classList.remove('bg-light');
    }
}

function hideHowItWorks() {
    if (!window.RDL.isINTL) {
        hideLoader = true;
    }
    document.getElementById('howItWorks').classList.add("d-none");
}

function IsAffiliateTraffic() {
    var afltTrafic = false;
    var templateFlow = window.EB.GetQueryString('templateflow');
    var hiwBDFlow = window.EB.GetQueryString('bdflow'); //EB-6957
    var directFlow = null;//window.EB.GetQueryString('rwz-df');

    var loginAfterCTFlow = getExperimentVariant(window.RDL.MPR_LoginAfterChooseTemplate_ABTest_Id) == "3";

    if (window.EB.readCookie('contentcd') != null && window.EB.readCookie('contentcd') != "") {
        directFlow = window.EB.readCookie('contentcd');
    }
    if ((window.EB.readCookie('BDLP') != null && hiwBDFlow == null) || window.EB.readCookie('lp') == 'MPRUKZLP06' || templateFlow || directFlow || loginAfterCTFlow) {
        afltTrafic = true;
    }
    return afltTrafic;
}
function termConditions(event) {

    event.preventDefault();
    if (window.RDL.PortalSettings.ConfigurePortal == "3") {
        window.open('https://www.livecareer.com/terms-of-use', 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
    else if (window.RDL.PortalSettings.ConfigurePortal == "20") {
        window.open('https://www.myperfectcoverletter.com/information/termsofuse.aspx', 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
    else if (window.RDL.PortalSettings.ConfigurePortal == "29") {
        window.open('/information/termsofuse.aspx', 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
    else if (window.RDL.PortalSettings.ConfigurePortal == "32") {
        window.open('/informations/conditionsdutilisation.aspx', 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
    else if (window.RDL.PortalSettings.ConfigurePortal == "33") {
        window.open('/informacion/terminosdeuso.aspx', 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
    else if (window.RDL.PortalSettings.ConfigurePortal == "37") {
        window.open('/informazioni/terminidiutilizzo.aspx', 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
    else if (window.RDL.PortalSettings.ConfigurePortal == "62") {
        window.open('/informacoes/termosdeuso.aspx', 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
    else if (window.RDL.PortalSettings.ConfigurePortal == "16" && window.RDL.isJobHero) {
        window.open('/jobhero/information/termsofuse.aspx', 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
    else if (window.RDL.PortalSettings.ConfigurePortal == "16") {
        window.open('https://www.myperfectresume.com/information/termsofuse.aspx', 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
    else {
        window.open(RDL.Paths.TermsOfUseLink, '', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
}
function privacyPolicy(event) {

    event.preventDefault();
    if (window.RDL.PortalSettings.ConfigurePortal == "3") {
        window.open('https://www.livecareer.com/privacy-policy', 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
    else if (window.RDL.PortalSettings.ConfigurePortal == "20") {
        window.open('https://www.myperfectcoverletter.com/information/privacy.aspx', 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
    else if (window.RDL.PortalSettings.ConfigurePortal == "29") {
        window.open('/information/privacy.aspx', 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
    else if (window.RDL.PortalSettings.ConfigurePortal == "32") {
        window.open('/informations/confidentialite.aspx', 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
    else if (window.RDL.PortalSettings.ConfigurePortal == "33") {
        window.open('/informacion/privacidad.aspx', 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
    else if (window.RDL.PortalSettings.ConfigurePortal == "37") {
        window.open('/informazioni/privacy.aspx', 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
    else if (window.RDL.PortalSettings.ConfigurePortal == "62") {
        window.open('/informacoes/privacidade.aspx', 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
    else if (window.RDL.PortalSettings.ConfigurePortal == "16" && window.RDL.isJobHero) {
        window.open('/jobhero/information/privacy.aspx', 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
    else if (window.RDL.PortalSettings.ConfigurePortal == "16") {
        window.open('https://www.myperfectresume.com/information/privacy.aspx', 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
    else {
        window.open(RDL.Paths.PrivacyPolicyLink, 'livecareer', 'width=780,height=550,scrollbars=1,toolbar=0,resizable=1,menubar=0');
    }
}

window.RDL.Localization = {
    "Email_Subject": "Subject: ", "Ignore": "Ignore", "City": "City", "Next": "Next", "Name": "Name", "fName": "First Name", "lName": "Last Name", "lName": "Last Name", "StreetAddress": "Street Address", "State": "State/Province", "HomeNumber": "Home Phone", "MobileNumber": "Cell Phone", "Bold": "Bold", "Back": " Back", "Skip": "Skip >", "Undo": "Undo", "Redo": "Redo", "Italic": "Italic", "ShortMonth_November": "Nov", "WantAnotherTemplate": "Want to choose another template?", "Experience_StartMonth": "Start Month", "Experience_StartYear": "Start Year", "Experience_endMonth": "End Month", "Experience_endYear": "End Year",
    "ExportOptions": "Export Options", "Requied": "*Required", "Experience_Heading": "Add another position", "Experience_Err_Date": "Start date can not be greater than the last date.", "Summary_SubHeading": "Write something great about yourself.", "AddWork_Link": "Go to Volunteer and Internship Section", "Contact_Err_EmailRequired": "Please enter your email address.", "GoToVolunteer": "Go to Volunteer and Internship Section", "Email_YourMessage": "Your Message", "ShortMonth_July": "Jul", "ShortMonth_June": "Jun", "RightTrack": "You’re on the right track!", "AddSection": "Add Section", "Change": "Change", "Cancel": "Cancel", "Standard": "Standard",
    "Contact_OccasionalEmail": "I’d like occasional emails with resume suggestions", "SpellCheckCompleted": "Spell check is completed.", "Education_State": "State", "Education_Field": "Field of Study", "School_Location": "School Location", "Education_Heading": "Add Another Degree", "AddVolunteer_Link": "Add some Volunteer work", "Welcome": "Welcome", "Employer": "Employer", "Skill_SubHeading": "Add a few skills to show employers what you're good at.", "Volunteer_DescriptionHelp": "Need help writing your volunteer work ?", "ShortMonth_September": "Sep", "Awards": "Awards", "Contact": "Contact", "Experience_Position": "Position title", "Err_NotValidEmail": "Username is not a valid email address.", "Publications": "Publications",
    "chooseTemplate_Heading": "What do you want your resume to look like?", "chooseTemplate_subHeading": "Scroll to view all styles and click to select a specific style.", "Contact_Heading": "Let's complete your Resume Heading", "Job_Status_heading": "Tell us about you",
    "Job_Status_Subheading": "(We'll use this information to personalize your experience.)", "Career_Information_Heading": "Please answer a few questions about yourself:", "Career_Information_Sub_Heading": "Your current experience level is used to match you with a resume format.", "Finalize": "Finalize", "Design": "Design", "AddMoreWork": "+ Add more work experience", "NotFoundInDictionary": "Not found in our dictionary:", "Volunteer_State": "State", "Contact_State": "State Address", "Contact_Phone": "Phone Number", "Password": "Password", "Contact_Email": "Email (Ex. albert@gravity.com)", "HereIsResume": "Here’s Your Resume!", "Volunteer_Description": "Enter your volunteer description.", "Summary_Details": "Sell yourself for the job. Describe who you are and the value that you bring. Include 3-5 sentences. Customize your summary to the job you’re applying to.", "Skill_AddFewSkill": "{0}You don't have any skills listed yet. {1}Adding a few skills{2} can improve your resume.{3}", "CreateResumeGetJob": "Now let’s create your resume and get the job you really want.", "Skill_JobSkill": "Job Skill", "Fmt_Expanded": "Expanded", "Skill_AddSkill": "+ Add another skill", "EnterSenderName": "Please enter the senders name.", "Month_November": "November", "Download": "Download", "AddAnotherSection": "+ Add another section", "Experience": "Experience", "SkinName_Matisse": "Matisse", "Volunteer_SubHeading": "Show employers your good deeds. Start with the most recent one.", "SkinName_Frida": "Frida", "Education": "Education", "Volunteer_Heading": "Volunteer and internship experience", "SignIn": "Sign In", "Skills": "Skills", "ResumeFormat_Html_Upper": "Web Page (.html)", "Search": "Search", "CanHaveJobTitle": "Oops, you forgot to enter the Job title.", "CanHaveSchoolName": "Oops, you forgot to enter the school name.", "CanHaveDegree": "Oops, you forgot to enter the degree.", "Experience_SubHeading": "Show employers what you’re good at. Start with your current job.", "ResumeFormat_Txt_Upper": "Plain Text (.txt)", "ResumeFormat_RTF_Upper": "Rich Text (.rtf)", "LookingGood": "Looking good!", "Customize": "Customize", "ShortMonth_January": "Jan", "SaveNext": "SAVE & NEXT", "AddOrChangeWork": "Add or change your work experience", "FillingSection": "Filling Out Sections", "Month_October": "October", "Contact_AddAnotherNumber": "+ Add another number", "Experience_EndYear": "End Year", "JobTitle": "Job Title", "EnterAdditionalDescription": "Enter  {0} description.", "EnterSubject": "Please enter the subject.", "ExampleHeading": "Showing examples for:", "PreviewResume": "Preview Resume", "DefaultTemplate": "Default Template", "WeWillFind": "We’ll find a match for you", "NoInCorrectWord": "No incorrect word found.", "AffiliationExamples": "Affiliation Examples", "Email_To": "To: ", "DoYouLikeWhatSee": "Do you like what you see?", "PagesTitle": "{0} | LiveCareer Resume | Create your resume in minutes!", "Contact_AdditionalPhone": "Additional Phone Number", "CanChangeTemplate": "You can change it by choosing another template", "Education_Description": "Enter your education description", "Education_GradYear": "Graduation Year", "SkinName_OKeefe": "O’Keefe", "Contact_Err_PhoneCorrect": "Are your sure this is your correct phone number?", "WorkExperience": "Work Experience", "Month_February": "February", "Other": "Other", "Email": "Email Address", "Experience_DescriptionHelp": "Need help writing your job description ?", "FormattingTooltemplate": "Formatting tools and professional templates that will help you showcase your greatest strengths", "Print": "Print", "FillingSectionDetail": "If you do not fill in a section, it won't appear on your resume.", "Month_May": "May", "NeedHelpHeading": "Need help with this section?", "RememberMe": "Remember Me", "AdditionSection": "Additional Sections", "Month_August": "August", "EndMonth": "End Month", "AddWork_SubHeading": "It helps if you add some work experience to your resume. <strong>Volunteer work and internships</strong> count too!", "Error_PleaseTryLater": "Some Techincal Error Occured, Please Try After some Time.", "Education_AddDescription": "+ Add A Description", "EmailResume": "Email Your Resume", "AdditionalInformation": "Additional Information", "EnterValidEmail": "Please enter valid email address.",
    "Expanded": "Expanded", "Volunteer_Err_Date": "Start date can not be greater than the last date.", "Volunteer_EndYear": "End Year", "Experience_State": "State", "Err_PasswordIncorrect": "Username or Password is not correct.", "AutoCompleteNotRecognize": "", "StartMonth": "Start Month", "SkinName_Warhol": "Warhol", "Affiliations": "Affiliations", "Accomplishments": "Accomplishments", "Certifications": "Certifications", "Contact_Err_NameRequired": "Can we have your name?", "Education_School": "School Name", "Err_SomeErrorTryLater": "Some error occurred, please try again later.", "AnotherTemplate": "I Want Another Template", "Education_GradMonth": "Graduation Month", "ShortMonth_December": "Dec", "Examples": "Examples", "Err_PasswordRequired": "Password is required.", "Contact_StreetAddress": "Street Address", "Condensed": "Condensed", "Summary_Heading": "Summary", "FinalizeChangeResume": "Finalize : Change Resume", "UserName": "Username", "AllowedSpecialCharacters": "Allowed special characters are (-, _.() & / \\).", "Skill_NoSkillMgs": "You don't have any skills listed yet.\r\nAdding a few skills can improve your resume.", "Affiliation": "Affiliation", "EmailExistsSignInLink_Part1": "Oops! This email is already in use  ", "EmailExistsSignInLink_Part3": "Let's try again!", "EmailExistsSignInLink_Part2": "and the password you've entered doesn't match. ", "CommunityService": "Community Service", "StillWorkHere": "I still work here", "Contact_SubHeading": "This section shows your contact information so hiring managers can contact you.", "ResumeFormat_Word_Upper": "WORD", "AddAnotherSchool": "+ Add another school", "Fmt_Condensed": "Condensed", "Languages": "Languages", "ChangeTemplate": "Change Template", "Experience_JobDescription": "Enter Your job description", "Education_Degree": "Degree", "Education_CustomDegree": "Enter Your degree", "ShortMonth_October": "Oct", "Volunteer_Position": "Position title", "Education_HideDescription": "- Hide description", "Month_December": "December", "AddWork_Heading": "Add some work experience", "Month_January": "January", "SpellCheck": "Spell Check", "HowLikedSoFar": "How do you like it so far?", "Volunteer_StartYear": "Start Year", "SkinName_Michelangelo": "Michelangelo", "Education_SubHeading": "Where did you go to school? Start with your most recent one.", "ContentByExpert": "Content written by experts with key phrases and career specific examples to make your resume really stand out. Nice!", "CanHaveCompany": "Oops, you forgot to enter the Employer name.", "ChangeAll": "Change All", "Fmt_Standard": "Standard", "DelightEmployersWithResume": "Delight employers with an awesome resume and get the job you deserve.", "AddChangeEduExperience": "Add or change your education experience.", "Contact_Err_EmailCorrect": "Please use correct format for email address", "Email_Send": "Send", "Email_From": "From: ", "AddFromWizard": "Add from the examples below by clicking the +sign.", "AddSomeWork_heading": "Add some work experience", "Contact_Zip": "Zip Code", "Contact_FullName": "Name (Ex. Albert Einstein)", "SkinName_Picasso": "Picasso", "Experience_Company": "Company or business where you worked", "Summary": "Summary", "WhatIsCurrentJob": "What's your current or desired job title?", "BulletList": "BulletList", "localization": "localization", "Volunteer_Company": "Where you volunteered", "FormattingOptions": "Formatting Options", "IgnoreAll": "Ignore All", "AddSomeWork_Subheading": "It helps if you add some work experience to your resume. Volunteer work and internships count too!",
    "ShortMonth_August": "Aug", "Volunteer": "Volunteer", "_ShortMonth_April": "Apr", "SkinName_DaVinci": "Da Vinci", "HowToDownload": "How would you like to download your resume?", "ByClickingGetStart": "By clicking “Get started”,  you agree to our {0}Terms of Use{1} and {2}Privacy Policy{3}.", "PleaseWait": "Please wait", "SkinName_Dali": "Dali", "LetsAddEducation": "Now, let’s add your education.", "Underline": "Underline", "Contact_Err_PhoneZip": "Are your sure is this the correct zip code", "KeepThisTemplate": "Keep This Template", "ShortMonth_February": "Feb",
    "ResumeFormat_Pdf_Upper": "Adobe PDF (.pdf)", "ResumeFormat_Doc_Upper": "MS Word document (.docx)", "AddVolunteer_SubHeading": "It helps if you add internships or volunteer experience to your resume. If you don't add any, this section will appear empty. If you change your mind, you can always add it later.", "AStateOfArt": "A state-of-the-art resume generator that does all the hard work", "AddVolunteer_Heading": "Add volunteer work or internships", "LoveWhatSee": "Love what you see or change it", "Month_April": "April", "WhatForYou": "What’s in it for you:", "Month_March": "March", "WhatNext": "What do you want to do next?", "ShortMonth_March": "Mar", "Month_September": "September", "EnterYourEmail": "Please enter your email address", "Experience_StartYear": "Start Year", "PersonalInfo": "Personal Info", "AddSections_Upper": "ADD SECTIONS", "Month_June": "June", "Month_July": "July", "OtherSectionError": "Please enter section name", "EmailSentSuccesfully": "Your resume is on its way! Click {0}here{1} if you would like to send it again.", "MessageHeading": "message", "Current": "Current", "GetStarted": "Create my Resume", "Offline_Message": "It seems that you are offline, we may not be able to give you precise suggestion nor backup your data.", "cbg1Content": "Our most popular design for a reason, the Professional gives your resume a smart, classic look. Great for sales professionals, and anyone who wants a resume that looks sharp.", "cbg2Content": "Simple yet beautiful, this classic design is perfect for job-seekers in almost any industry. Business pros in particular will find this a great selection.", "cbg3Content": "Stand out and get noticed with this distinctive, eye-catching design. Blue highlights make for easy scanning, and better readability. Perfect for admin, nursing and most other fields.", "cnt1Content": "This attractive, minimalist design uses white space to improve readability. An excellent option for education professionals, anyone else looking for a clear, clean look.", "cnt3Content": "Blue highlights give this resume a unique feel that will help set you apart. Ideal for job-seekers in customer service, retail, and anyone else who wants to stand out.", "hrt1Content": "The Executive is the perfect resume for people looking to make a great first impression. A smart choice for job-seekers at any stage of their career.", "hrt2Content": "Grab employers' attention with this elegant, professional design. A good choice wide range of industries, from retail and sales to healthcare, and many more.", "mtp1Content": "Give your resume a fresh, contemporary look with our Modern design. A solid choice for everyone from health care workers to salespeople to executives.", "mtp2Content": "The Contempo is a sleek, cutting-edge design that uses bold highlights to emphasize your experience and make your resume pop. Great for all career fields & experience levels.", "upt1Content": "Sleek red lines give this resume a distinctive two-color look. Perfect for artists, designers, and anyone who wants to showcase their creative side.", "upt2Content": "If you don't want your resume to look like everyone else's, the Charismatic is a bold choice. Popular with sales and retail pros, it's designed to get you noticed.", "pcf1Content": "The Pacific highlights your contact info in blue - a subtle but effective way to stand out from the sea of all-black resumes. Often used by education and sales professionals.",
    "ForgotPassword_InvalidUser": "Please enter registered email, so, we can help with your new password", "No_Suggestions": "No Suggestions"


};

// window.RDL.Plugin('google').LoadScript('https://maps.googleapis.com/maps/api/js?key=AIzaSyAtLXXj623rzw5GPmumw4y3hIFJw1uUr8s&libraries=places');


window.RDL.MockSettings = {};
// use exact same text as in helpers/CommonUtils
//TODO, this way needs to be better managed.
//RDL.MockSettings.defaultConfigTypeToUse = "PREFER_ONLINE_IF_CONNECTED"      
RDL.MockSettings.defaultConfigTypeToUse = "CONFIGURED_FLAG"
RDL.MockSettings.defaultHandlerType = "OFFLINE_DATA"

RDL.MockSettings.defaultPortalType = "RNA"


if (!window.console) window.console = {};
if (!window.console.log) window.console.log = function () { };


function postRegisterMethod(newUser, targetUrl, userId) {
    window.EB.createCookie('guestUserId', '', null);
    window.login.handleResponse(userId);
}
function postLoginMethod(redirectUrl, userId) {
    window.EB.createCookie('guestUserId', '', null);
    window.login.handleResponse(userId);
}
function postRegisterError(errorMessage) {
    var result = null;

    if (errorMessage == "FAILED_ALREADY_REGISTER")
        result = -1;

    window.login.handleResponse(result);
}


var vsuid = "";
var userType = "";
function getAnalyticsValues() {
    if (!window.EB.readCookie("vstrType")) {
        userType = "New";
        window.EB.createCookie("vstrType", "1", 5 * 365, window.location.host.substr(window.location.host.indexOf('.')));
    }
    else {
        userType = "Returning";
    }
}



function loadJqueryDepJs() {
    if (window.RDL.UserConsent) {
        EB.LoadThirdPartyScripts();
    }
    if (typeof (window.RDL.ExternalJavascripts) && window.RDL.ExternalJavascripts) {
        window.RDL.ExternalJavascripts.forEach(function (element) {
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = element;
            document.getElementById('afterLoadContent').appendChild(script);
        });
    }

    if (window.RDL.selectedPortal && window.RDL.selectedPortal.downLoadAccountsLoginJs) {
        // create guest user
        var divLoginWidget = document.getElementById('divLoginWidget');
        if (divLoginWidget) {
            divLoginWidget.setAttribute("data-targetDomain", window.RDL.Paths.AccountsURL);
            divLoginWidget.setAttribute("data-productCode", window.RDL.PortalSettings.ConfigureProductCd);
            divLoginWidget.setAttribute("data-portalCode", window.RDL.PortalSettings.ConfigurePortalCd);
        }
        var accountsUrl = window.RDL.Paths.AccountsURL + "/scripts/v3/login.min.js?v=2";
        if (window.RDL.PortalSettings.ConfigurePortal == "16") {
            accountsUrl = window.RDL.Paths.AccountsURL + "/scripts/app/accounts.min.js";// "https://dev-accounts.myperfectresume.com/scripts/app/accounts.min.js";
        }
        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = accountsUrl;//window.RDL.Paths.AccountsURL + "/scripts/v3/login.min.js?v=2";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'accounts-js'));
    }
}

function handlePostPageLoad(loadReactBundles) {
    var url = window.location.origin + location.pathname;
    if (url.endsWith('/')) {
        url = url.substr(0, url.length - 1);
    }
    var componentizationVariant = EB.readCookie('componentizationvariant');
    if (componentizationVariant && RDL.UserClaims && RDL.UserClaims.user_uid) {
        EB.TrackEvents("identify", { "Experiment: MPR RWZ Componentization": componentizationVariant == "2" ? "Variability Estimator" : "Baseline" }, window.RDL.userId, false);
        EB.delete_cookie('componentizationvariant', window.RDL.selectedPortal.cookieDomain);
    }
    if (loadReactBundles) {
        EB.LoadJsFile("https://www.google.com/recaptcha/api.js?render=explicit", true);
        if (window.RDL.isINTL) {
            EB.LoadJsFile(configPath + portalCode + "/scripts/jquery-3.2.1.min.js", true, function () {
                loadJqueryDepJs();
            });

            if (window.RDL.PortalSettings.ConfigurePortal == "33") {
                EB.LoadJsFile("//wchat.freshchat.com/js/widget.js");
            }
        }
        else {
            EB.LoadJsFile("https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js", true, function () {
                loadJqueryDepJs();
            });
        }
        if (window.RDL.IsOptimizelyEnabled && optimizelyKey)
            EB.LoadJsFile("//cdn.optimizely.com/js/" + optimizelyKey + ".js", true);

        EB.LoadJsFile(configPath + (window.RDL.isINTL ? 'intl' : portalCode) + "/scripts/es6/es6-shim.min.js", true, '', true);
        EB.LoadJsFile(vendorPkgUrl, true, function () {
            EB.LoadJsFile(developerPkgUrl, true, function () {
                hideLoader = false; // reset value
                if (!url.endsWith(window.RDL.Paths.BasePath)) {
                    document.getElementById("page-loader").classList.add("hide");
                }
            });
            setVendorBundleLoaded();
        });
        EB.LoadJsFile(experimentUrl, true);
        //EB.loadStyleSheet(configPath + portalCode + "/styles/font-awesome/css/font-awesome.min.css");
        EB.loadStyleSheet(configPath + (window.RDL.isINTL ? 'intl' : portalCode) + "/styles/font-awesome-5/css/fontawesome5.min.css");
    }
    else {
        loadJqueryDepJs();
    }
    GetFeatureSet();
    window.RDL.Skins.forEach(function (element) {
        var img = document.createElement('img');
        img.src = element.imageURL;
        if (RDL.enableResumeTitle) {
            img.src = element.imageURL.indexOf('-rttl') < 0 ? element.imageURL.replace('.svg', '-rttl.svg') : element.imageURL;
        }
        document.getElementById('afterLoadContent').appendChild(img);
    });
    if (window.RDL.PortalSettings.ConfigurePortal != "3" && window.RDL.PortalSettings.ConfigurePortal != "79" && window.RDL.PortalSettings.ConfigurePortal != "84") {
        (function () {
            var script = document.createElement('script');
            script.type = "text/javascript";
            script.src = 'https://apis.google.com/js/platform.js';
            script.async = true;
            document.body.appendChild(script);
        })();

        window.fbAsyncInit = function () {
            // FB.init({
            //     appId: window.RDL.FacebookAppId,
            //     status: true,
            //     cookie: true,
            //     version: 'v2.5'
            // });
        };

        (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) { return; }
            js = d.createElement(s); js.id = id;
            js.src = "https://connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    if (window.RDL.isINTL) {
        EB.LoadGoogleMapsScriptINTL();
    }
    else {
        if (window.RDL.GoogleMapsChannelParams.clientKey) {
            var gmClientKey = window.RDL.GoogleMapsChannelParams.clientKey, gmChannelKey = "";
            for (var i = 0; i < window.RDL.GoogleMapsChannelParams.desktopKeys.length; i++) {
                if (window.RDL.GoogleMapsChannelParams.desktopKeys[i].id == "CNTC") {
                    gmChannelKey = window.RDL.GoogleMapsChannelParams.desktopKeys[i].value;
                    break;
                }
            }
            EB.LoadGoogleMapsScript(gmClientKey, gmChannelKey);
        }
    }
    if (window.RDL.UserConsent) {
        EB.GetMixpanelProperties();
    }
}

if (bGuestUserCreated) {
    window.addEventListener('load', function () {
        RDL.pageLoaded = true;

        // if (window.RDL.isINTL) {
        //     handlePostPageLoad(false);
        // }
    }, false);
}

var segmentKey = window.RDL.segmentKey;

function getBuilderStep() {
    var builderStep = window.EB.GetQueryString('builderstep');
    if (builderStep) {
        window.EB.createCookie('builderstep', builderStep, null);
    }

    return builderStep;
}

function ShowAffiliateFlow(userUid) {
    if (window.RDL.userId != null) {
        // if(window.RDL.UserClaims != null && window.RDL.UserClaims.role != "Guest"){
        //     // means registered user
        //     window.RDL.executeWizardFlow = false;
        // }

        var builderStep = getBuilderStep();
        if (window.RDL.executeWizardFlow && builderStep && window.affiliateappEntry != null) {
            clearInterval(showAffiliateTimer);
            window.affiliateappEntry.startProcessing(window.RDL.userId, builderStep);
        }
        else if (window.RDL.executeWizardFlow == false) {
            clearInterval(showAffiliateTimer);
            var isGuestUser = (window.RDL.UserClaims == null) ? true : (window.RDL.UserClaims != null && window.RDL.UserClaims.role == "Guest" ? true : false);
            if (isGuestUser) {
                if (url.endsWith(window.RDL.Paths.BasePath)) {
                    showHowItWorks();
                    document.getElementById("page-loader").classList.add("hide");
                }
            }
            else {
                document.getElementById("page-loader").classList.add("hide");
                // startApp(null);
            }
        }
        else {
            if (window.affiliateappEntry != null && window.RDL.userId != null) {
                clearInterval(showAffiliateTimer);
                var visitIntentCd = window.EB.readCookie('vsintentcd');
                var directFlow = (window.RDL.UserClaims == null) ? true : (window.RDL.UserClaims != null && window.RDL.UserClaims.role == "Guest" ? true : false);
                if (directFlow == true) {
                    if (visitIntentCd != null) {
                        window.affiliateappEntry.createGuestUser(userUid);
                    }
                    else {
                        showHowItWorks();
                        document.getElementById("page-loader").classList.add("hide");
                    }
                }
                else {
                    document.getElementById("page-loader").classList.add("hide");
                    startApp(null);
                }
            }
        }
    }
    else if (isTemplateFlow() && url.endsWith(window.RDL.Paths.BasePath)) {
        clearInterval(showAffiliateTimer);
        showHowItWorks();
        window.RDL.skipAuthCookieCheck = true;
    }
}

function PostGuestCreated(userUID, claimCall) {
    window.RDL.userId = userUID;

    if (!userUID && window.EB.readCookie(BoldAuthCookieName) == null && EB.readCookie("userinfo") && EB.readCookie("userinfo").length > 0) {
        // case: if Boldauth is missing & only old userinfo exists & userid comes null from accounts, so clear the userInfo cookie.
        window.EB.delete_cookie("userinfo", window.RDL.selectedPortal.cookieDomain);
    }

    if (claimCall == null) {
        window.EB.Claims(handleClaims);
    }
    else {
        clearInterval(postGuestUserTimer);
        postGuestUserTimer = setInterval(function () {
            handlePostGuestCreated(userUID);
        }, 200);
    }
}
function handlePostGuestCreated(userUID) {
    window.EB.createCookie('guestUserId', userUID, null);
    if (window.RDL.executeWizardFlow == true) {
        clearInterval(postGuestUserTimer);
    }
    if (window.appEntry != null && postGuestCreatedCalled == false) {
        postGuestCreatedCalled = true;
        clearInterval(postGuestUserTimer);
        if (window.RDL.selectedPortal && window.RDL.selectedPortal.isHloom) {
            window.EB.Claims(handleClaims); // fetch claims again and move forward
        } else {
            window.appEntry.createGuestUser(userUID);
        }
    }
}

function PostGuestRegistered(userUID, response) {
    window.EB.createCookie('guestUserId', '', null);

    window.login.handleGuestRegisteredResponse(userUID, response);
}
function PostDirectForgotPassword(response) {
    window.EB.createCookie('guestUserId', '', null);

    window.login.handleForgotPasswordResponse(response);
}

var browserWidth = (window.innerWidth > 0) ? window.innerWidth : screen.width;

function isLargeDevice() {
    if (browserWidth >= 992 && browserWidth < 1200)
        return true;
    else
        return false;
}
/** for enlarge **/
function isIPadAndDeviceWidth() {
    // for iapd and all tabs(android)
    var windowInnerWidth = window.innerWidth;
    var windowInnerHeight = window.innerHeight;
    if (windowInnerWidth < windowInnerHeight && windowInnerWidth < 1024)
        return true;
    else
        return false;
}
/******/
function isMac() {
    if (navigator.userAgent.match(/Mac OS/i))
        return true;
    else
        return false;
}

function isIPAD() {
    if (navigator.userAgent.match(/iPad/i))
        return true;
    else
        return false;
}

function isIE10() {
    if (navigator.userAgent.match(/MSIE 10.0/i))
        return true;
    else
        return false;
}

function isIE11() {
    if ((navigator.userAgent.toLowerCase().indexOf('trident') > -1) && (navigator.userAgent.match(/11.0/i)))
        return true;
    else
        return false;
}

function isEdge() {
    if (navigator.userAgent.match(/Edge/i))
        return true;
    else
        return false;
}

function isFireFox() {
    if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1) {
        return true;
    }
    else {
        return false;
    }
}
function IsChooseTemplateAbTestConductedForTemplateFlow() {
    var templateFlow = window.EB.GetQueryString('templateflow');
    if (templateFlow == undefined || templateFlow == null) {
        return true;
    }
    else {
        if (templateFlow && templateFlow.toLowerCase() == 'choosetemplate') {
            return true;
        }
        else {
            return false;
        }
    }
}
function IsSelectResumeAbTestConductedForTemplateFlow() {
    var templateFlow = window.EB.GetQueryString('templateflow');
    if (templateFlow == undefined || templateFlow == null) {
        return true;
    }
    else {
        if (templateFlow && (templateFlow.toLowerCase() == 'selectresume')) {
            return true;
        }
        else {
            return false;
        }
    }
}
function IsContactAbTestConductedForTemplateFlow() {
    var templateFlow = window.EB.GetQueryString('templateflow');
    if (templateFlow == undefined || templateFlow == null) {
        return true;
    }
    else {
        if (templateFlow && templateFlow.toLowerCase() == 'contact') {
            return true;
        }
        else {
            return false;
        }
    }
}
function isSafari() {
    var ua = navigator.userAgent.toLowerCase();
    if (ua.indexOf('safari') != -1) {
        if (ua.indexOf('chrome') > -1) {
            return false;
        } else {
            return true;
        }
    }
}

function stickyElement(selector, cssClass) {
    if (window.pageYOffset >= selector.offsetTop) {
        selector.classList.add(cssClass);
    } else {
        selector.classList.remove(cssClass);
    }
}

function isCountryUS(countryCd) {
    return countryCd && countryCd == "US";
}

EB.GetMixpanelProperties = function () {
    var mixpanelProperties = '';
    try {
        clearInterval(mixpanelTimeout);
        mixpanelTimeout = setInterval(function () {
            if (typeof mixpanel != 'undefined' && typeof mixpanel.get_distinct_id != 'undefined') {
                clearInterval(mixpanelTimeout);
                if (isIPAD()) {
                    mixpanel.register({ 'device type': 'tablet' });
                } else {
                    mixpanel.register({ 'device type': 'desktop' });
                }
                isDeviceRegister = true;

                if (window.RDL.PortalSettings.ConfigurePortal != "3" && window.RDL.PortalSettings.ConfigurePortal != "79" && window.RDL.PortalSettings.ConfigurePortal != "84") {
                    var infoProperties = mixpanel._.info.properties();
                    var persistProperties = mixpanel.persistence.properties();
                    mixpanelProperties = JSON.stringify(EB.Extend(infoProperties, persistProperties));
                    EB.createCookie("mixpanelprops", mixpanelProperties, null, window.location.host.substr(window.location.host.indexOf('.')));
                    // if (window.RDL.isJobHero) {
                    //     EB.CreateCookieOnDomain(RDL.PortalSettings.ConfigurePortal);
                    // }
                }
            }
        }, 300);
    }
    catch (e) {
        console.log('error in mixpanel properties fetching');
    }
};

EB.LoadThirdPartyScripts = function () {

    window.EB.NanoRep();

    var jsVersion = getCurrentVersion();
    // if(!window.RDL.isINTL){
    //     var optimizelyScript = document.createElement('script');
    //     optimizelyScript.type = "text/javascript";
    //     optimizelyScript.src = '//cdn.optimizely.com/js/' + optimizelyKey +'.js';
    //     optimizelyScript.onload = function(){
    //         var experimentScript = document.createElement('script');
    //         experimentScript.type = "text/javascript";
    //         experimentScript.src = window.RDL.Paths.BasePath + '/scripts/experiment-' + jsVersion;
    //         document.body.appendChild(experimentScript);
    //     }
    //     document.body.appendChild(optimizelyScript);
    // }

    //primary GTM
    (function (w, d, s, l, i) {
        w[l] = w[l] || []; w[l].push({
            'gtm.start':
                new Date().getTime(), event: 'gtm.js'
        }); var f = d.getElementsByTagName(s)[0],
            j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl + (window.RDL.googleMapappendGTMQueryStringsKey ? window.RDL.googleMapappendGTMQueryStringsKey : ''); f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', primaryGTM);

    //secondary GTM
    if (_gtmKey && _gtmKey != null && _gtmKey.length > 0) {
        (function (w, d, s, l, i) {
            w[l] = w[l] || []; w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            }); var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : ''; j.async = true; j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl; f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', _gtmKey);
    }

    !function () {
        var analytics = window.analytics = window.analytics || []; if (!analytics.initialize) if (analytics.invoked) window.console && console.error && console.error("Segment snippet included twice."); else {
            analytics.invoked = !0; analytics.methods = ["trackSubmit", "trackClick", "trackLink", "trackForm", "pageview", "identify", "reset", "group", "track", "ready", "alias", "debug", "page", "once", "off", "on"]; analytics.factory = function (t) { return function () { var e = Array.prototype.slice.call(arguments); e.unshift(t); analytics.push(e); return analytics } }; for (var t = 0; t < analytics.methods.length; t++) { var e = analytics.methods[t]; analytics[e] = analytics.factory(e) } analytics.load = function (t) { var e = document.createElement("script"); e.type = "text/javascript"; e.async = !0; e.src = ("https:" === document.location.protocol ? "https://" : "http://") + "cdn.segment.com/analytics.js/v1/" + t + "/analytics.min.js"; var n = document.getElementsByTagName("script")[0]; n.parentNode.insertBefore(e, n) }; analytics.SNIPPET_VERSION = "4.0.0";
            analytics.load(segmentKey);
        }
    }();

    var segmentScript = document.createElement('script');
    segmentScript.type = "text/javascript";
    segmentScript.src = window.RDL.Paths.BasePath + '/scripts/SegmentIo-' + jsVersion;
    document.body.appendChild(segmentScript);
}

function getCurrentVersion() {
    var developerScript = document.querySelector('script[src*="developer.bundle"]');
    if (!window.RDL.isINTL && typeof developerPkgUrl != "undefined" && developerPkgUrl) {
        var srcArray = developerPkgUrl.split('-');
        if (srcArray.length == 3) {
            return srcArray[2];
        }
    }
    else if (developerScript && developerScript.src) {
        var srcArray = developerScript.src.split('-');
        if (srcArray.length == 3) {
            return srcArray[2];
        }
    }
    return '1.0.0.js';
}

function getApiUrl(templateUrl, environment, ApiVersion) {
    var env = "qa-@@countryCDembedded-builder";

    switch (environment) {
        case "regression":
        case "reg":
        case "reg-stg":
            env = "regression-@@countryCDembedded-builder";
            BoldAuthCookieName = "BOLDAuth_Reg";
            break;
        case "stg":
            env = "stg-@@countryCDembedded-builder";
            break;
        case "perf":
            env = "perf-@@countryCDembedded-builder";
            break;
        case "www":
            env = "@@countryCDembeddedbuilder";
            break;
        case "builder":
            env = "@@countryCDembeddedbuilder";
            break;
        case "local":
        case "qa":
            BoldAuthCookieName = "BOLDAuth_QA";
            break;
    }
    env = subDomainCountryCD == undefined || subDomainCountryCD == "" ? env.replace('@@countryCD', "") : env.replace('@@countryCD', subDomainCountryCD + '-');
    var returnUrl = templateUrl.replace('@@env', env);
    if (ApiVersion != null && ApiVersion != undefined && ApiVersion != "") {
        returnUrl = returnUrl.replace('v1', 'v2');
    }
    return returnUrl;
}

function getConfigName(environment) {
    var configName = "dev";

    switch (environment) {
        case "regression":
        case "reg":
            configName = "reg";
            break;
        case "reg-stg":
            configName = "reg-stg";
            break;
        case "stg":
            configName = "stg";
            break;
        case "perf":
            configName = "perf";
            break;
        case "www":
            configName = "prod";
            break;
        case "builder":
            configName = "prod";
            break;
    }
    return configName;
}
EB.SHA256 = function (s) {
    var chrsz = 8;
    var hexcase = 0;
    function safe_add(x, y) {
        var lsw = (x & 0xFFFF) + (y & 0xFFFF);
        var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
        return (msw << 16) | (lsw & 0xFFFF);
    }
    function S(X, n) { return (X >>> n) | (X << (32 - n)); }
    function R(X, n) { return (X >>> n); }
    function Ch(x, y, z) { return ((x & y) ^ ((~x) & z)); }
    function Maj(x, y, z) { return ((x & y) ^ (x & z) ^ (y & z)); }
    function Sigma0256(x) { return (S(x, 2) ^ S(x, 13) ^ S(x, 22)); }
    function Sigma1256(x) { return (S(x, 6) ^ S(x, 11) ^ S(x, 25)); }
    function Gamma0256(x) { return (S(x, 7) ^ S(x, 18) ^ R(x, 3)); }
    function Gamma1256(x) { return (S(x, 17) ^ S(x, 19) ^ R(x, 10)); }
    function core_sha256(m, l) {
        var K = new Array(0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5, 0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5, 0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3, 0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174, 0xE49B69C1, 0xEFBE4786, 0xFC19DC6, 0x240CA1CC, 0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA, 0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7, 0xC6E00BF3, 0xD5A79147, 0x6CA6351, 0x14292967, 0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13, 0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85, 0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3, 0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070, 0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5, 0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3, 0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208, 0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2);
        var HASH = new Array(0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A, 0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19);
        var W = new Array(64);
        var a, b, c, d, e, f, g, h, i, j;
        var T1, T2;
        m[l >> 5] |= 0x80 << (24 - l % 32);
        m[((l + 64 >> 9) << 4) + 15] = l;
        for (var i = 0; i < m.length; i += 16) {
            a = HASH[0];
            b = HASH[1];
            c = HASH[2];
            d = HASH[3];
            e = HASH[4];
            f = HASH[5];
            g = HASH[6];
            h = HASH[7];
            for (var j = 0; j < 64; j++) {
                if (j < 16) W[j] = m[j + i];
                else W[j] = safe_add(safe_add(safe_add(Gamma1256(W[j - 2]), W[j - 7]), Gamma0256(W[j - 15])), W[j - 16]);
                T1 = safe_add(safe_add(safe_add(safe_add(h, Sigma1256(e)), Ch(e, f, g)), K[j]), W[j]);
                T2 = safe_add(Sigma0256(a), Maj(a, b, c));
                h = g;
                g = f;
                f = e;
                e = safe_add(d, T1);
                d = c;
                c = b;
                b = a;
                a = safe_add(T1, T2);
            }
            HASH[0] = safe_add(a, HASH[0]);
            HASH[1] = safe_add(b, HASH[1]);
            HASH[2] = safe_add(c, HASH[2]);
            HASH[3] = safe_add(d, HASH[3]);
            HASH[4] = safe_add(e, HASH[4]);
            HASH[5] = safe_add(f, HASH[5]);
            HASH[6] = safe_add(g, HASH[6]);
            HASH[7] = safe_add(h, HASH[7]);
        }
        return HASH;
    }
    function str2binb(str) {
        var bin = Array();
        var mask = (1 << chrsz) - 1;
        for (var i = 0; i < str.length * chrsz; i += chrsz) {
            bin[i >> 5] |= (str.charCodeAt(i / chrsz) & mask) << (24 - i % 32);
        }
        return bin;
    }
    function Utf8Encode(string) {
        string = string.replace(/\r\n/g, "\n");
        var utftext = "";
        for (var n = 0; n < string.length; n++) {
            var c = string.charCodeAt(n);
            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if ((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }
        }
        return utftext;
    }
    function binb2hex(binarray) {
        var hex_tab = hexcase ? "0123456789ABCDEF" : "0123456789abcdef";
        var str = "";
        for (var i = 0; i < binarray.length * 4; i++) {
            str += hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8 + 4)) & 0xF) +
                hex_tab.charAt((binarray[i >> 2] >> ((3 - i % 4) * 8)) & 0xF);
        }
        return str;
    }
    s = Utf8Encode(s);
    return binb2hex(core_sha256(str2binb(s), s.length * chrsz));
}

if (!Element.prototype.matches)
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
        Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest)
    Element.prototype.closest = function (s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };

// Pass in the objects to merge as arguments.
// For a deep extend, set the first argument to `true`.   
EB.Extend = function () {
    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length;

    // Check if a deep merge
    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
        deep = arguments[0];
        i++;
    }

    // Merge the object into the extended object
    var merge = function (obj) {
        for (var prop in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, prop)) {
                // If deep merge and property is an object, merge properties
                if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
                    extended[prop] = EB.Extend(true, extended[prop], obj[prop]);
                } else {
                    extended[prop] = obj[prop];
                }
            }
        }
    };

    // Loop through each object and conduct a merge
    for (; i < length; i++) {
        var obj = arguments[i];
        merge(obj);
    }

    return extended;

};

EB.CreateCookieOnDomain = function (portalID, cookieInfo) {
    var d = new Date();
    var year = d.getFullYear();
    var month = d.getMonth();
    var day = d.getDate();

    var data = {
        docCookies: document.cookie,
        cookieToCreate: {
            'mixpanelprops': new Date(year - 1, month, day),
            '_mixpanel': new Date(year + 1, month, day),
            'prd': new Date(year + 100, month, day),
            'ref': new Date(year + 5, month, day),
            'useruid': new Date(year + 1, month, day),
            'optimizelyEndUserId': new Date(year + 1, month, day),
            'guestUserId': new Date(year - 1, month, day),
            'ajs_anonymous_id': new Date(year + 1, month, day),
            'ajs_group_id': new Date(year + 1, month, day),
            'ajs_user_id': new Date(year + 1, month, day),
        }
    }

    EB.CallAjax(window.RDL.Paths.BaseApiUrl + 'tracking/createcookies?portalId=' + portalID, "POST", JSON.stringify(data), true, true);
}

//Added for safari distortion issue
EB.RerenderStaticDynamic = function () {
    var styleElement = document.getElementById('static') && document.getElementById('static').parentElement;
    if (styleElement && document.getElementById('document') && parseInt(window.getComputedStyle(document.getElementById('document'), null).getPropertyValue('padding-left').replace('px', '')) <= 0) {
        // means styled not applied on the document
        styleElement.appendChild(document.getElementById("static"));
        styleElement.appendChild(document.getElementById("dynamic"));
    }
}


function clearAndRedirect(redirectPath) {
    if (!isRedirectDone) {
        isRedirectDone = true;
        window.EB.delete_cookie(BoldAuthCookieName, window.RDL.selectedPortal.cookieDomain);
        window.EB.delete_cookie("userinfo", window.RDL.selectedPortal.cookieDomain);
        window.EB.delete_cookie("UserStatus", window.RDL.selectedPortal.cookieDomain);
        window.EB.delete_cookie("useruid", window.RDL.selectedPortal.cookieDomain);
        window.EB.delete_cookie("guestUserId", window.RDL.selectedPortal.cookieDomain);
        window.EB.delete_cookie("guestUserId");
        if (window.indexedDB) {
            window.indexedDB.deleteDatabase("localforage");
        }
        window.location = redirectPath;
    }
}

function EBErrorCheck() {
    if (sessionStorage.unloadCounter && +sessionStorage.unloadCounter >= window.RDL.maxloopCount) {
        sessionStorage.unloadCounter = 0; // reset the counter
        clearAndRedirect("/?forceRedirect=PageRefresh");
    }
}

function pageRefreshCounter() {
    var latestTime = new Date();
    if (!sessionStorage.lastTime || (((latestTime - new Date(sessionStorage.lastTime)) / 1000) < window.RDL.loopTimeGapInSec)) {
        if (sessionStorage.unloadCounter) {
            sessionStorage.unloadCounter = +sessionStorage.unloadCounter + 1;
        } else {
            sessionStorage.unloadCounter = 1;
        }
    }
    else {
        sessionStorage.unloadCounter = 0; // reset counter 
    }
    sessionStorage.lastTime = new Date();
}

function getGAClientId() {
    var clientId = "";
    window.ga && ga(function (tracker) {
        clientId = tracker.get('clientId');
    });
    return clientId;
}

window.addEventListener('unload', function (event) {
    pageRefreshCounter();
});
if (sessionStorage.isEnlarge) {
    setTimeout(function () { if (window.UpdateUIForEnlargePreview) UpdateUIForEnlargePreview() }, 1);
}
if (sessionStorage.isEnlargeWithTemplates == "true") {
    RDL.showPreviewWithTemplates = true;
}
if (sessionStorage.isShrinkPreview) {
    setTimeout(function () { if (window.UpdateUIForEnlargePreview) UpdateUIForEnlargePreview("shrink-preview") }, 1);
}

function GetFeatureSet() {
    var featureUrl = RDL.Paths.BaseApiUrl + 'config/features/' + RDL.selectedPortal.PortalCode;
    EB.CallAjax(featureUrl, "GET", null, true, false, function (data) {
        if (data) {
            RDL.ArrayFeatureSet = data;
        }
    });
}

function isFeaturePresent(featureCD) {
    var result = false;
    var feature = RDL.ArrayFeatureSet.filter(function (feature) { return feature.featureCD.toLowerCase() == featureCD.toLowerCase() });
    if (feature && feature.length && feature[0].isActive) {
        result = true;
    }
    return result;
}

function isHIWSkipMode() {
    var isHidden = false;
    var validQueryStrings = ["templateflow", "mode", "docid", "page", "builderstep", "bdflow"];
    validQueryStrings.forEach(function (m) {
        if (m && EB.GetQueryString(m)) {
            isHidden = true;
        }
    });
    return isHidden;
}

function isTemplateFlow() {
    var isValidTemplateFlow = false;
    var templateFlow = window.EB.GetQueryString('templateflow');
    if ((templateFlow && (templateFlow.toLowerCase() == 'selectresume' || templateFlow.toLowerCase() == 'contact' || templateFlow.toLowerCase() == 'choosetemplate'))) {
        isValidTemplateFlow = true;
    }
    return isValidTemplateFlow;
}

function isUserPurged() {
    var _userPurged = false;
    try {
        if (!!window.RDL.UserClaims && !!window.RDL.UserClaims.role && !!window.RDL.UserClaims.createdOn && window.RDL.UserClaims.role.toLowerCase() == "guest") {
            var createdDate = window.RDL.UserClaims.createdOn;
            if (window.RDL.isINTL) {
                var initial = createdDate.split(/\//);
                createdDate = [initial[1], initial[0], initial[2]].join('/');
            }
            var date1 = new Date(createdDate);
            var date2 = new Date();
            var diffTime = Math.abs(date2.getTime() - date1.getTime());
            var diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            if (diffDays > 29) {
                _userPurged = true;
            }
        }
    }
    catch (e) {
        _userPurged = false;
    }
    return _userPurged;

}
function disableOnNextClick(param) {
    if (!!document.getElementById("onNextClick")) {
        if (param) {
            document.getElementById("onNextClick").classList.add("no-link")
        }
        else {
            document.getElementById("onNextClick").classList.remove("no-link")
        }
    }
}
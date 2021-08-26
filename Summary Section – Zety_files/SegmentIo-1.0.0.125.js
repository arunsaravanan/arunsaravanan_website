function TrackEvents(eventname, eventpropval, userid, islogin, skipTraitsToIterable) {
    var propertiesToBeSent = CommonTrackProperties(islogin);
    var eventproperties = {};

    if (eventpropval) {
        for (var item in eventpropval) {
            if (eventpropval[item]) {
                propertiesToBeSent[item] = eventpropval[item];
                eventproperties[item] = eventpropval[item];
            }
        }
    }
    switch (eventname) {
        case "identify":
            {
                FireSegmentIOIdentify(userid, eventproperties, skipTraitsToIterable);
                break;
            }
        default:
            {
                FireSegmentIOTrack(eventname, propertiesToBeSent);
            }
    }
}

function TrackPageEvents(eventpropval, islogin) {
    var propertiesToBeSent = CommonTrackProperties(islogin);

    if (eventpropval) {
        for (var item in eventpropval) {
            if (eventpropval[item]) {
                propertiesToBeSent[item] = eventpropval[item];
            }
        }
    }
    FireSegmentIOPage("", propertiesToBeSent);
}

function TrackAlias(userid) {
    FireSegmentIOAlias(userid);
}

function FireSegmentIOIdentify(userid, traits, skipTraitsToIterable) {
    traits = traits || null;
    if (userid) {
        if (traits != null) {
            if (skipTraitsToIterable) {
                analytics.identify(userid, traits, {
                    integrations: {
                        'Iterable': false
                    }
                });
            }
            else{
                analytics.identify(userid, traits);
            }
        }
        else {
            analytics.identify(userid);
        }
    }
    else {
        analytics.identify(traits);
    }
    //clear traits
    analytics.ready(function () {
        analytics.user().traits({});
    });
}


function FireSegmentIOPage(pagename, properties) {
    try {
        properties = properties || null;
        if (properties != null) {
            analytics.page(pagename, properties);
        }
        else {
            analytics.page(pagename);
        }
    }
    catch (ex) {
        console.log(ex);
    }
}

//The track API call is how you record any actions your users perform, along with any properties that describe the action.
function FireSegmentIOTrack(eventname, properties) {
    try {
        properties = properties || null;
        if (properties != null) {
            analytics.track(eventname, properties);
        }
        else {
            analytics.track(eventname);
        }
    }
    catch (ex) {
        console.log(ex);
    }
}

function FireSegmentIOAlias(userid) {
    analytics.alias(userid);
}

function AsyncSegTrack(userId, isLoggedIn, userType, visitId) {
    //Loaded a page event
    var objToSend = { 'Page Type': 'Product', 'Visitor Type': userType, 'userId': userId };
    if (visitId) {
        objToSend.visitId = visitId;
    }
    TrackPageEvents(objToSend, isLoggedIn);
}

function FireSignUpEvents(uuid) {
    if (uuid != '') {
        TrackAlias(uuid);
        TrackEvents("identify", null, uuid, true);
    }
}

function CommonTrackProperties(islogin) {
    var propertiesToBeSent = {
        'builder type': 'Resume Wizard',
        'Platform': 'Web',
        'Feature Set': 'Resumes',
        'Login Status': islogin ? 'TRUE' : 'FALSE'
    };

    return propertiesToBeSent;
}
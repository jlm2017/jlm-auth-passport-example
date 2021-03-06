const config = {};

// session config
// generate your own (on node, you can use "require('crypto').randomBytes(64).toString('base64')
config.cookieSecret = 'yXbPkGpnzXDVDssD534c6Zjo866PaYvvtolkV8di7F+T4Vu6XgFs17yQWe1xctfT944B9mSfRTymv1S0QVxXWw==';


// jlm-auth general config
// these settings are specific to the jlm-auth platform and should generally not be changed for your specific
// application

// the url to which the user should be redirect to initiate the OAuth2 process
config.authorizationURL = 'https://auth.jlm2017.fr/autoriser';

// the url to which your app must POST the authorization code to get the access token
config.tokenURL = 'https://auth.jlm2017.fr/token';

// the default scopes to ask for (may be changed in specific cases after discussions with the jlm2017 team)
config.scopes = ['view_profile'];

// the scope separator used by the OAuth2 provider
config.scopeSeparator = ' ';

// the API URL from which the profile can be requested
config.profileURL = 'https://auth.jlm2017.fr/voir_profil';


// jlm-auth application specific config
// these settings are specific to your application

// your client ID (given by the jlm2017 team)
config.clientID = 'client1';

// your client secret (WARNING: production secrets should NEVER be versioned with the source code)
config.clientSecret = 'secret1';


// the redirect URL that will be used during the OAuth2 process
// you cannot change these values unilaterally: they must be whitelisted by
// the jlm2017 team for security reasons
config.redirectBase = 'http://localhost:8000';
config.redirectPath = '/connexion/retour';

config.redirectURL = config.redirectBase + config.redirectPath;

module.exports = config;

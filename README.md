# Deep Links & Universal Links Study

A study project exploring **Deep Links** and **Universal Links** using a movie app (MovieBox) as the example. Built with Next.js (web) and React Native (mobile).

## Project Structure

```
deeplink-universal-links/
├── web-moviebox/              # Next.js web app
│   └── src/
│       ├── app/
│       │   ├── page.tsx                  # Home - movie grid
│       │   └── movie/[id]/page.tsx       # Movie detail with deep link button
│       └── lib/api/
│           ├── config.ts                 # Image URL helpers
│           ├── movies.ts                 # Static movie data
│           └── index.ts                  # Public exports
│
└── mobile-moviebox/           # React Native bare app
    ├── App.tsx                            # Navigation + linking config
    ├── ios/MobileApp/Info.plist           # iOS URL scheme registration
    └── src/
        ├── api/
        │   ├── movies.ts                 # Static movie data
        │   └── index.ts                  # Public exports
        └── screens/
            ├── HomeScreen.tsx             # Movie list
            └── MovieDetailScreen.tsx      # Movie detail
```

## What Are Deep Links & Universal Links?

### Deep Links
Custom URL schemes that open your app directly.

```
moviebox://movie/550     → Opens MovieBox app → Movie Detail screen
myapp://profile/john     → Opens MyApp → Profile screen
```

**Pros:**
- Works even if the app isn't installed (shows error)
- Can pass complex data via URL parameters
- No server configuration needed

**Cons:**
- Shows a confirmation dialog ("Open in App?")
- No fallback if app isn't installed
- Can be intercepted by other apps registering the same scheme

### Universal Links
Standard HTTPS URLs that open your app when installed, otherwise open in browser.

```
https://moviebox.app/movie/550   → Opens MovieBox app (if installed)
https://moviebox.app/movie/550   → Opens website (if not installed)
```

**Pros:**
- Seamless - no confirmation dialog
- Secure - only your domain can trigger the link
- Falls back to website naturally

**Cons:**
- Requires server-side configuration (`apple-app-site-association`)
- Requires Associated Domains entitlement in the app

## Movie Data

The app uses static movie data with real poster images from TMDB's CDN. No API key or account required - just works.

```typescript
// mobile-moviebox/src/api/movies.ts

export const movies: Movie[] = [
  {
    id: 550,
    title: 'Fight Club',
    overview: 'An insomniac office worker and a devil-may-care soap maker...',
    poster_path: 'https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QI4S2t0POoT.jpg',
    vote_average: 8.4,
    // ...
  },
  // ...more movies
];
```

## Implementation

### 1. Web App (Next.js)

The movie detail page has a button that triggers the deep link:

```tsx
// web-moviebox/src/app/movie/[id]/page.tsx

<a
  href={`moviebox://movie/${movie.id}`}
  className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-medium inline-block"
>
  Open in Mobile App
</a>
```

For universal links, you'd use an HTTPS URL instead:

```tsx
<a href={`https://moviebox.app/movie/${movie.id}`}>
  Open in Mobile App
</a>
```

### 2. Mobile App - React Navigation Linking Config

React Navigation handles deep link routing automatically:

```tsx
// mobile-moviebox/App.tsx

const linking = {
  prefixes: ['moviebox://', 'https://moviebox.app'],
  config: {
    screens: {
      MovieDetail: {
        path: 'movie/:id',
        parse: {
          id: (id: string) => id,
        },
      },
    },
  },
};

function App() {
  return (
    <NavigationContainer linking={linking}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MovieDetail" component={MovieDetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
```

**Key points:**
- `prefixes`: Both custom scheme (`moviebox://`) and universal link domain (`https://moviebox.app`)
- `path`: URL pattern to match (`movie/:id`)
- `parse`: Transform URL params (string to correct type)

### 3. iOS - URL Scheme Registration

Register the custom URL scheme in `Info.plist`:

```xml
<!-- ios/MobileApp/Info.plist -->

<key>CFBundleURLTypes</key>
<array>
  <dict>
    <key>CFBundleURLName</key>
    <string>moviebox</string>
    <key>CFBundleURLSchemes</key>
    <array>
      <string>moviebox</string>
    </array>
  </dict>
</array>
```

### 4. Testing Deep Links

#### iOS Simulator

```bash
# Test via command line
xcrun simctl openurl <device-udid> "moviebox://movie/550"

# List devices
xcrun simctl list devices booted
```

#### Android Emulator

```bash
# Test via command line
adb shell am start -a android.intent.action.VIEW -d "moviebox://movie/550"
```

#### From Website
Open the web app in the simulator's browser and click the "Open in Mobile App" button.

## Deep Link vs Universal Link Comparison

| Feature | Deep Link | Universal Link |
|---------|-----------|----------------|
| URL format | `moviebox://movie/550` | `https://moviebox.app/movie/550` |
| Opens app directly | Yes | Yes |
| Confirmation dialog | Yes | No |
| Works without app | Shows error | Opens website |
| Requires server config | No | Yes (`apple-app-site-association`) |
| Security | Lower (any app can register) | Higher (domain verification) |

## What's Next

### For Universal Links (iOS)

1. Deploy `apple-app-site-association` to `https://moviebox.app/.well-known/`:

```json
{
  "applinks": {
    "apps": [],
    "details": [
      {
        "appID": "TEAM_ID.com.yourapp.moviebox",
        "paths": ["/movie/*"]
      }
    ]
  }
}
```

2. Add Associated Domains entitlement in Xcode:
   - Target → Signing & Capabilities → Associated Domains
   - Add: `applinks:moviebox.app`

### For Universal Links (Android)

1. Deploy `assetlinks.json` to `https://moviebox.app/.well-known/`:

```json
[{
  "relation": ["delegate_permission/common.handle_all_urls"],
  "target": {
    "namespace": "android_app",
    "package": "com.moviebox",
    "sha256_cert_fingerprints": ["YOUR_SHA256_FINGERPRINT"]
  }
}]
```

2. Add intent filter in `AndroidManifest.xml`:

```xml
<activity android:name=".MainActivity">
  <intent-filter android:autoVerify="true">
    <action android:name="android.intent.action.VIEW" />
    <category android:name="android.intent.category.DEFAULT" />
    <category android:name="android.intent.category.BROWSABLE" />
    <data android:scheme="https" android:host="moviebox.app" android:pathPrefix="/movie" />
  </intent-filter>
</activity>
```

## Running the Projects

### Web App

```bash
cd web-moviebox
npm install
npm run dev
# Opens at http://localhost:3000
```

### Mobile App

```bash
cd mobile-moviebox
npm install
cd ios && pod install && cd ..
npx react-native run-ios
```

## Tech Stack

- **Web:** Next.js 16, React 19, TypeScript, Tailwind CSS
- **Mobile:** React Native 0.87, React Navigation 7, TypeScript
- **Images:** TMDB CDN (no API key needed)

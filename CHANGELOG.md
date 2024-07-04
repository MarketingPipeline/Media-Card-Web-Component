# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - (July 4, 2024)

### Changed
- Removed previous polyfill services and replaced with CloudFlare's service. For more info see [here](https://blog.cloudflare.com/automatically-replacing-polyfill-io-links-with-cloudflares-mirror-for-a-safer-internet)

## [1.0.3] - (Nov 12, 2023)

### Added
- New feature for populating cards for books.
- Polyfills added to fix issues on mobile devices etc.

### Changed
- Renamed component / project from `Media-Element.js` to `Media-Card-Web-Component`
- Code quality has been highly improved
- Some CSS improvements.

## [1.0.2] - (August 7, 2023)

### Added
- New feature for getting genres for movies.

### Changed
- Implemented CSS via a constructed stylesheet
- Code quality has been highly improved


## [1.0.1] - (July 6, 2023)

### Added
- New `type` attribute to differentiate between movie, TV show, and song.
- New endpoint for fetching song details from iTunes API.
- Different card styles and heights for songs and movies/TV shows.

### Changed
- Split movie name and year from the `name` attribute for fetching media details.
- Adjusted endpoint URL based on the `type` attribute.
- Changed `getDetails` function to use async/await syntax.
- Enhanced error handling to display appropriate messages for different media types.
- Refactored `cardTemplate` method to support different templates for movies, TV shows, and songs.
- Adjusted card styles based on `type` attribute to provide distinct designs for songs and other media.
- Implemented additional CSS for black theme.

### Fixed
- Improved the extraction of movie release year and TV show first air date year.
- Fixed various styling issues related to card height and background positioning.

## [1.0.0] - (July 4, 2023)

Initial release of this web component. 


<!--
These Markdown anchors provide a link to the diff for each release. They should be
updated any time a new release is cut.
-->
[2.0.0]: /v2.0.0
[1.0.2]: /v1.0.3
[1.0.2]: /v1.0.2
[1.0.1]: /v1.0.1
[1.0.0]: /v1.0.0

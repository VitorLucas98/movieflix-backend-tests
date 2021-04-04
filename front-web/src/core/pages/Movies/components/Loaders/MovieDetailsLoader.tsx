import ContentLoader from "react-content-loader"

const MovieDetailsLoader = () => (
  <ContentLoader
    speed={2}
    width={1170}
    height={374}
    viewBox="0 0 1170 375"
    backgroundColor="#4c4c4c"
    foregroundColor="#8c8c8c"
  >
    <rect x="17" y="25" rx="10" ry="10" width="526" height="320" />
    <rect x="601" y="140" rx="10" ry="10" width="541" height="204" />
    <rect x="601" y="106" rx="10" ry="10" width="300" height="20" />
    <rect x="601" y="70" rx="10" ry="10" width="80" height="25" />
    <rect x="601" y="25" rx="10" ry="10" width="400" height="30" />
  </ContentLoader>
)

export default MovieDetailsLoader;
import React from "react"
import ContentLoader from "react-content-loader"

const MovieCardLoader = () => {
    const loaderItems = [0, 1, 2, 3];
    return (
        <>
            {loaderItems.map(item => (
                <ContentLoader
                    key={item}
                    speed={2}
                    width={270}
                    height={331}
                    viewBox="0 0 270 331"
                    backgroundColor="#6c6c6c"
                    foregroundColor="#c2c1c1"
                >
                    <rect x="0" y="0" rx="10" ry="10" width="270" height="331" />
                </ContentLoader>
            ))}
        </>
    )
}

export default MovieCardLoader;
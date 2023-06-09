module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/AbheethaIshanRangana/react-app",
    plugins: [
        '@semantic-release/commit-analyzer',
        '@semantic-release/release-notes-generator',
        ['@semantic-release/github',
        {
            assests: [
                { path: "build.zip", label: "Build" },
                { path: "coverage.zip", label: "Coverage" }
            ]    
        }
        ]
    ]
};
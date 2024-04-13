// https://github.com/jestjs/jest/issues/1650

const resolveSnapshotPath = (testPath, snapshotExtension) => {
    return testPath + snapshotExtension;
};

const resolveTestPath = (snapshotFilePath, snapshotExtension) => {
    return snapshotFilePath
        .replace('__snapshots__/', '')
        .replace(snapshotExtension, '');
};

const testPathForConsistencyCheck = 'some/example.test.tsx';

module.exports = {
    resolveSnapshotPath,
    resolveTestPath,
    testPathForConsistencyCheck
};

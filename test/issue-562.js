"use strict";

var assert = require('assert'),
    Browscap = require('../browscap.js'),
    browscap = new Browscap(),
    browser;

suite('checking for issue 562.', function () {
  test('issue-562-A ["Cyberduck/4.6.4 (16610) (Windows XP/5.1) (x86)"]', function () {
    browser = browscap.getBrowser('Cyberduck/4.6.4 (16610) (Windows XP/5.1) (x86)');

    assert.strictEqual(browser['Comment'], 'Cyberduck', 'Expected actual "Comment" to be \'Cyberduck\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Cyberduck', 'Expected actual "Browser" to be \'Cyberduck\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Application', 'Expected actual "Browser_Type" to be \'Application\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'iterate GmbH', 'Expected actual "Browser_Maker" to be \'iterate GmbH\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '4.6', 'Expected actual "Version" to be \'4.6\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '4', 'Expected actual "MajorVer" to be \'4\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '6', 'Expected actual "MinorVer" to be \'6\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'WinXP', 'Expected actual "Platform" to be \'WinXP\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], '5.1', 'Expected actual "Platform_Version" to be \'5.1\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Windows XP', 'Expected actual "Platform_Description" to be \'Windows XP\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Microsoft Corporation', 'Expected actual "Platform_Maker" to be \'Microsoft Corporation\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Alpha'], false, 'Expected actual "Alpha" to be false (was \'' + browser['Alpha'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Beta'], false, 'Expected actual "Beta" to be false (was \'' + browser['Beta'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Win16'], false, 'Expected actual "Win16" to be false (was \'' + browser['Win16'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Win32'], true, 'Expected actual "Win32" to be true (was \'' + browser['Win32'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Win64'], false, 'Expected actual "Win64" to be false (was \'' + browser['Win64'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Frames'], false, 'Expected actual "Frames" to be false (was \'' + browser['Frames'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['IFrames'], false, 'Expected actual "IFrames" to be false (was \'' + browser['IFrames'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Tables'], false, 'Expected actual "Tables" to be false (was \'' + browser['Tables'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Cookies'], false, 'Expected actual "Cookies" to be false (was \'' + browser['Cookies'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['BackgroundSounds'], false, 'Expected actual "BackgroundSounds" to be false (was \'' + browser['BackgroundSounds'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['JavaScript'], false, 'Expected actual "JavaScript" to be false (was \'' + browser['JavaScript'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['VBScript'], false, 'Expected actual "VBScript" to be false (was \'' + browser['VBScript'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['JavaApplets'], false, 'Expected actual "JavaApplets" to be false (was \'' + browser['JavaApplets'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['ActiveXControls'], false, 'Expected actual "ActiveXControls" to be false (was \'' + browser['ActiveXControls'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isMobileDevice'], false, 'Expected actual "isMobileDevice" to be false (was \'' + browser['isMobileDevice'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isTablet'], false, 'Expected actual "isTablet" to be false (was \'' + browser['isTablet'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isSyndicationReader'], false, 'Expected actual "isSyndicationReader" to be false (was \'' + browser['isSyndicationReader'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Crawler'], false, 'Expected actual "Crawler" to be false (was \'' + browser['Crawler'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isFake'], false, 'Expected actual "isFake" to be false (was \'' + browser['isFake'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isAnonymized'], false, 'Expected actual "isAnonymized" to be false (was \'' + browser['isAnonymized'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isModified'], false, 'Expected actual "isModified" to be false (was \'' + browser['isModified'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['CssVersion'], '0', 'Expected actual "CssVersion" to be \'0\' (was \'' + browser['CssVersion'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['AolVersion'], '0', 'Expected actual "AolVersion" to be \'0\' (was \'' + browser['AolVersion'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Name'], 'Windows Desktop', 'Expected actual "Device_Name" to be \'Windows Desktop\' (was \'' + browser['Device_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Maker'], 'unknown', 'Expected actual "Device_Maker" to be \'unknown\' (was \'' + browser['Device_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Type'], 'Desktop', 'Expected actual "Device_Type" to be \'Desktop\' (was \'' + browser['Device_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse', 'Expected actual "Device_Pointing_Method" to be \'mouse\' (was \'' + browser['Device_Pointing_Method'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Code_Name'], 'Windows Desktop', 'Expected actual "Device_Code_Name" to be \'Windows Desktop\' (was \'' + browser['Device_Code_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown', 'Expected actual "Device_Brand_Name" to be \'unknown\' (was \'' + browser['Device_Brand_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'unknown', 'Expected actual "RenderingEngine_Name" to be \'unknown\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'unknown', 'Expected actual "RenderingEngine_Maker" to be \'unknown\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
  test('issue-562-B ["Lynx/2.8.5rel.1 libwww-FM/2.15FC SSL-MM/1.4.1c OpenSSL/0.9.7e-dev"]', function () {
    browser = browscap.getBrowser('Lynx/2.8.5rel.1 libwww-FM/2.15FC SSL-MM/1.4.1c OpenSSL/0.9.7e-dev');

    assert.strictEqual(browser['Comment'], 'Lynx', 'Expected actual "Comment" to be \'Lynx\' (was \'' + browser['Comment'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser'], 'Lynx', 'Expected actual "Browser" to be \'Lynx\' (was \'' + browser['Browser'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Type'], 'Browser', 'Expected actual "Browser_Type" to be \'Browser\' (was \'' + browser['Browser_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Bits'], '32', 'Expected actual "Browser_Bits" to be \'32\' (was \'' + browser['Browser_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Maker'], 'Thomas Dickey', 'Expected actual "Browser_Maker" to be \'Thomas Dickey\' (was \'' + browser['Browser_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Browser_Modus'], 'unknown', 'Expected actual "Browser_Modus" to be \'unknown\' (was \'' + browser['Browser_Modus'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Version'], '2.8', 'Expected actual "Version" to be \'2.8\' (was \'' + browser['Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MajorVer'], '2', 'Expected actual "MajorVer" to be \'2\' (was \'' + browser['MajorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['MinorVer'], '8', 'Expected actual "MinorVer" to be \'8\' (was \'' + browser['MinorVer'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform'], 'Linux', 'Expected actual "Platform" to be \'Linux\' (was \'' + browser['Platform'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Version'], 'unknown', 'Expected actual "Platform_Version" to be \'unknown\' (was \'' + browser['Platform_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Description'], 'Linux', 'Expected actual "Platform_Description" to be \'Linux\' (was \'' + browser['Platform_Description'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Bits'], '32', 'Expected actual "Platform_Bits" to be \'32\' (was \'' + browser['Platform_Bits'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Platform_Maker'], 'Linux Foundation', 'Expected actual "Platform_Maker" to be \'Linux Foundation\' (was \'' + browser['Platform_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Alpha'], false, 'Expected actual "Alpha" to be false (was \'' + browser['Alpha'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Beta'], false, 'Expected actual "Beta" to be false (was \'' + browser['Beta'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Win16'], false, 'Expected actual "Win16" to be false (was \'' + browser['Win16'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Win32'], false, 'Expected actual "Win32" to be false (was \'' + browser['Win32'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Win64'], false, 'Expected actual "Win64" to be false (was \'' + browser['Win64'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Frames'], true, 'Expected actual "Frames" to be true (was \'' + browser['Frames'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['IFrames'], true, 'Expected actual "IFrames" to be true (was \'' + browser['IFrames'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Tables'], true, 'Expected actual "Tables" to be true (was \'' + browser['Tables'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Cookies'], true, 'Expected actual "Cookies" to be true (was \'' + browser['Cookies'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['BackgroundSounds'], false, 'Expected actual "BackgroundSounds" to be false (was \'' + browser['BackgroundSounds'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['JavaScript'], false, 'Expected actual "JavaScript" to be false (was \'' + browser['JavaScript'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['VBScript'], false, 'Expected actual "VBScript" to be false (was \'' + browser['VBScript'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['JavaApplets'], false, 'Expected actual "JavaApplets" to be false (was \'' + browser['JavaApplets'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['ActiveXControls'], false, 'Expected actual "ActiveXControls" to be false (was \'' + browser['ActiveXControls'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isMobileDevice'], false, 'Expected actual "isMobileDevice" to be false (was \'' + browser['isMobileDevice'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isTablet'], false, 'Expected actual "isTablet" to be false (was \'' + browser['isTablet'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isSyndicationReader'], false, 'Expected actual "isSyndicationReader" to be false (was \'' + browser['isSyndicationReader'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Crawler'], false, 'Expected actual "Crawler" to be false (was \'' + browser['Crawler'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isFake'], false, 'Expected actual "isFake" to be false (was \'' + browser['isFake'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isAnonymized'], false, 'Expected actual "isAnonymized" to be false (was \'' + browser['isAnonymized'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['isModified'], false, 'Expected actual "isModified" to be false (was \'' + browser['isModified'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['CssVersion'], '0', 'Expected actual "CssVersion" to be \'0\' (was \'' + browser['CssVersion'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['AolVersion'], '0', 'Expected actual "AolVersion" to be \'0\' (was \'' + browser['AolVersion'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Name'], 'general Desktop', 'Expected actual "Device_Name" to be \'general Desktop\' (was \'' + browser['Device_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Maker'], 'unknown', 'Expected actual "Device_Maker" to be \'unknown\' (was \'' + browser['Device_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Type'], 'Desktop', 'Expected actual "Device_Type" to be \'Desktop\' (was \'' + browser['Device_Type'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse', 'Expected actual "Device_Pointing_Method" to be \'mouse\' (was \'' + browser['Device_Pointing_Method'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Code_Name'], 'general Desktop', 'Expected actual "Device_Code_Name" to be \'general Desktop\' (was \'' + browser['Device_Code_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown', 'Expected actual "Device_Brand_Name" to be \'unknown\' (was \'' + browser['Device_Brand_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Name'], 'unknown', 'Expected actual "RenderingEngine_Name" to be \'unknown\' (was \'' + browser['RenderingEngine_Name'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Version'], 'unknown', 'Expected actual "RenderingEngine_Version" to be \'unknown\' (was \'' + browser['RenderingEngine_Version'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'unknown', 'Expected actual "RenderingEngine_Maker" to be \'unknown\' (was \'' + browser['RenderingEngine_Maker'] + '\'; used pattern: ' + browser['browser_name_regex'] + ')');
  });
});

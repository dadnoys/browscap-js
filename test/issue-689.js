var assert = require('assert'),
    browscap = require('../browscap.js'),
    browser;

suite('checking for issue 689.', function () {
  test('issue-689-A', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Windows NT 6.1; WOW64; rv:38.0) Gecko/20100101 Thunderbird/38.0.1 Lightning/4.0.0.1");

    assert.strictEqual(browser['Browser'], 'Thunderbird');
    assert.strictEqual(browser['Browser_Type'], 'Email Client');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Mozilla Foundation');
    assert.strictEqual(browser['Version'], '38.0');
    assert.strictEqual(browser['MajorVer'], '38');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'Win7');
    assert.strictEqual(browser['Platform_Version'], '6.1');
    assert.strictEqual(browser['Platform_Bits'], '64');
    assert.strictEqual(browser['Platform_Maker'], 'Microsoft Corporation');
    assert.strictEqual(browser['isMobileDevice'], false);
    assert.strictEqual(browser['isTablet'], false);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['JavaScript'], true);
    assert.strictEqual(browser['Cookies'], true);
    assert.strictEqual(browser['Frames'], true);
    assert.strictEqual(browser['IFrames'], true);
    assert.strictEqual(browser['Tables'], true);
    assert.strictEqual(browser['VBScript'], false);
    assert.strictEqual(browser['JavaApplets'], true);
    assert.strictEqual(browser['ActiveXControls'], false);
    assert.strictEqual(browser['BackgroundSounds'], false);
    assert.strictEqual(browser['Device_Name'], 'Windows Desktop');
    assert.strictEqual(browser['Device_Maker'], 'Various');
    assert.strictEqual(browser['Device_Type'], 'Desktop');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse');
    assert.strictEqual(browser['Device_Code_Name'], 'Windows Desktop');
    assert.strictEqual(browser['Device_Brand_Name'], 'unknown');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko');
    assert.strictEqual(browser['RenderingEngine_Version'], '38.0');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Mozilla Foundation');
  });
  test('issue-689-B', function () {
    browser = browscap.getBrowser("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.10; rv:38.0) Gecko/20100101 Thunderbird/38.0.1 Lightning/4.0.0.1");

    assert.strictEqual(browser['Browser'], 'Thunderbird');
    assert.strictEqual(browser['Browser_Type'], 'Email Client');
    assert.strictEqual(browser['Browser_Bits'], '32');
    assert.strictEqual(browser['Browser_Maker'], 'Mozilla Foundation');
    assert.strictEqual(browser['Version'], '38.0');
    assert.strictEqual(browser['MajorVer'], '38');
    assert.strictEqual(browser['MinorVer'], '0');
    assert.strictEqual(browser['Platform'], 'MacOSX');
    assert.strictEqual(browser['Platform_Version'], '10.10');
    assert.strictEqual(browser['Platform_Bits'], '32');
    assert.strictEqual(browser['Platform_Maker'], 'Apple Inc');
    assert.strictEqual(browser['isMobileDevice'], false);
    assert.strictEqual(browser['isTablet'], false);
    assert.strictEqual(browser['Crawler'], false);
    assert.strictEqual(browser['JavaScript'], true);
    assert.strictEqual(browser['Cookies'], true);
    assert.strictEqual(browser['Frames'], true);
    assert.strictEqual(browser['IFrames'], true);
    assert.strictEqual(browser['Tables'], true);
    assert.strictEqual(browser['VBScript'], false);
    assert.strictEqual(browser['JavaApplets'], true);
    assert.strictEqual(browser['ActiveXControls'], false);
    assert.strictEqual(browser['BackgroundSounds'], false);
    assert.strictEqual(browser['Device_Name'], 'Macintosh');
    assert.strictEqual(browser['Device_Maker'], 'Apple Inc');
    assert.strictEqual(browser['Device_Type'], 'Desktop');
    assert.strictEqual(browser['Device_Pointing_Method'], 'mouse');
    assert.strictEqual(browser['Device_Code_Name'], 'Macintosh');
    assert.strictEqual(browser['Device_Brand_Name'], 'Apple');
    assert.strictEqual(browser['RenderingEngine_Name'], 'Gecko');
    assert.strictEqual(browser['RenderingEngine_Version'], '38.0');
    assert.strictEqual(browser['RenderingEngine_Maker'], 'Mozilla Foundation');
  });
});
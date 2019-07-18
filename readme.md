# **ACNS Cybersecurity Internship Security Response Header Chrome Extension**

This is an extension that gives you information about the following security response headers;

#### - Strict-Transport-Security
	Used to ensure that the browser is using a secure connection.

#### - Content-Security-Policy

	Controls what scripts can be loaded on the page.

#### - X-Frame-Options

	Utilized to prevent UI Redressing attacks that stem from 
	clickjacking.

#### - X-XSS-Protection

	Utilized to detect malicious HTML input and stop the site from 
	loading these dangerous scripts.

#### - X-Content-Type-Options

	A MIME-sniffing utility that tells browsers what to do with 
	recognized and unrecognized file types.

#### - Referrer-Policy

	Allows users to track where they came from.

#### - Feature-Policy

	Used to enable or disable certain features on the browser.

#### - X-Download-Options

	Prevents html files running as a part of the site and forces
	users to download them and open them manually.

#### - Public-Key-Pins

	Allows HTTPS websites to resist impersonation by attackers
	using mis-issued or otherwise fraudulent digital certificates.

## **Installation**

The extension is not in the Chrome Store yet. Please follow the steps below for installation;

- Go to “[https://github.com/acns-web-team-inc/sl_extension](https://github.com/acns-web-team-inc/sl_extension)” to download a zip copy of the extension.

- Extract the zip file.

- Open Google Chrome

- Type “chrome://extensions” to the address bar

- Turn on “Developer mode” on the top right side of the screen
![enter image description here](https://lh3.googleusercontent.com/qTifPC6hc8_qcWjT2ZeZ_GLlDXGMiBfBq-2MUoCESkCh5HCE5CvQXMc5YgDE1SAX3hhyULTEaS0B "DevMode")

- A new set of new options will appear at the top left side of the screen under the blue bar

- Click “Load unpacked”

- When you do, you will get a prompt to select the extension directory. Select the folder that you have extracted the extension contents to.

- Turn off the “Developer mode"

## **Usage**

When you first click the extension, you’ll see the window below. On the left most column, you’ll see a color-coded indication of Security Header status. Red for “No setting applied” and Green for “any setting applied”. Under the “Variables” column, you can see all the Security Response Headers that our extension investigates. On the initial window, in the rightmost column, the “Value” column, you can see if the web page you are on has the respective Security Response Headers set or missing.

![](https://lh3.googleusercontent.com/mcBGBceQt9VKbFmLLv3BQ7n076YmzjR-wWJ6gU1cpyBGHCUIskt4XB-r1yJL43fngHlNRDvFoMmJ "Basic Information")

If you click the “Show Advanced Info” button, you will see the window below. The first two columns are the same with the first window. However, the last column is detailed version of the previous window. In “Advanced Info” mode, the values you see are the settings that are implemented for the site or the server you are communicating with.

![](https://lh3.googleusercontent.com/WeyTDnXF8zEQoe3vnOOSS0UBvEGq2o9Mn9pnWKvsqPDGhPB91dg6EpBs_cIPs5GZBsdSf5O9RV8k "Advanced Info")

The final feature is the “Download Info” button. When you click this button, you can download a .csv file that holds date and URL information and Security Response Headers settings of the website or the server you are communicating with.

Please feel free to contact us via [ACNS_Cybersecurity_Interns@colostate.edu](mailto:ACNS_Cybersecurity_Interns@colostate.edu) if you have questions about the extension or if you need help with installation and/or usage.

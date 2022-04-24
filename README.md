# svcli
A command-line tool for quick string validation (i.e. IMEI, BTC, Email, Alphanumeric, etc.)

## How-to Install
npm install -g @foundation_alpha/svcli

## How-to Use

#### Basics
```svcli -t <type> "My string"```

Where type is one of the following: Email, URL, MACAddress, IP, IPRange, FQDN, Boolean, IBAN, BIC, Alpha, AlphaLocales, Alphanumeric, AlphanumericLocales, Numeric, PassportNumber, Port, Lowercase, Uppercase, Ascii, FullWidth, HalfWidth, VariableWidth, Multibyte, SemVer, SurrogatePair, Int, IMEI, Float, FloatLocales, Decimal, Hexadecimal, Octal, DivisibleBy, HexColor, RgbColor, HSL, ISRC, MD5, Hash, JWT, JSON, Empty, Length, Locale, ByteLength, UUID, MongoId, After, Before, In, CreditCard, IdentityCard, EAN, ISIN, ISBN, ISSN, MobilePhone, MobilePhoneLocales, PostalCode, PostalCodeLocales, EthereumAddress, Currency, BtcAddress, ISO8601, RFC3339, ISO31661Alpha2, ISO31661Alpha3, ISO4217, Base32, Base58, Base64, DataURI, MagnetURI, MimeType, LatLong, itelist, acklist, Whitelisted, Slug, StrongPassword, TaxID, Date, LicensePlate, VAT

#### From a file
svcli -t <type> -f myfile.txt
Every line in the file will be validated to see if it consists of a string that meets the requested type

#### From stdin
cat myfile.txt | svcli -t <type>
Every line read in from stdin will be validated to see if it consists of a string that meets the requested type

#### Example
1. ``` svcli -t Alphanumeric "Alpha1234"```  
Alpha1234	TRUE

2. ```svcli -t Alphanumeric "Alpha1234--+"```  
Alpha1234--+	FALSE

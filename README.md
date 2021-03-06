# Road signs
UK road signs as SVG and stylesheet variables

## Info
These repo contains a tool (gulp tasks) to create useful files for all UK traffic signs provided by the UK government as EPS files. This includes SVG's and SASS variables.

## Installation
Clone this repo and inside it run:
    `npm i`

You will also need gulp as a global script if you don't have it on your development box:
    `npm i -g gulp`

Once dependencies have been installed, you can simply run the following to convert the EPS files into SVG's and compress them:
    `gulp convert && gulp minify`

SASS variables are currently minimal and not derived from colors within the SVG's

## Optional
There is also a task to create a reference to all the files as a json array which can be consumed by other services, simply run:
    `gulp files`

This will generate an `index.json` in your root directory

### Copyright
Traffic signs are Crown copyright. They are part of legislation (Traffic Signs Regulations and General Directions 2002, often referred to as TSRGD). The numbers in the image file names relate to the TSRGD numbering.

You may reproduce traffic-sign images free of charge and without having to seek permission, but you must reproduce them accurately and not in a misleading context (eg not on roadside billboards where they could mislead drivers). You should also include a statement that these images are Crown copyright.

Please read the fuller conditions in the [[http://www.nationalarchives.gov.uk/doc/open-government-licence/|Open Government Licence]].

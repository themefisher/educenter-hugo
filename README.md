# Easy Setup (Hugo + Netlify + Forestry)
Build your website with educenter hugo theme by following this easy steps (No Coding Required)

<a href="http://bit.ly/meghna-hugo-installation" target="_blank" title="meghna hugo installation" rel="nofollow"><img width="100%" src="https://user-images.githubusercontent.com/37659754/70844354-4028be00-1e6a-11ea-8d84-02e9a25e7db8.png"></a>

In this tutorial we will show you to make your website live without buying any hosting and touching a single line of code. We made this tutorial based on [meghna hugo](https://github.com/themefisher/meghna-hugo) but you can setup everything like this.

### What you need !!

1. Git account (Ex: Github, Gitlab etc ) . In our case we use github.
2. [Netlify](https://netlify.com) account to host files and add custom domain .
3. [Forestry](https://forestry.io/) account to maintain whole project without code.


### Step 1 : Fork or Clone repository

First we will fork this [educenter hugo](https://github.com/themefisher/educenter-hugo) template.

### Step 2 : Add your repository in Forestry

Go to your [forestry](https://forestry.io/)  account and click on `import your site now`. declare your config.toml file [`exampleSite`] and fill up basic settings .

**Or just click this button for one click installation** [![import to forestry](https://assets.forestry.io/import-to-forestryK.svg)](https://app.forestry.io/quick-start?repo=themefisher/educenter-hugo&engine=hugo&version=0.60.1&config=exampleSite)

Now mark everything as done, then go to configuration to change the base url . You can put any url but this have to similar as netlify . So for now put a name which you are going to put in netlify as netlify subdomain.

### Step 3 : Setup and host website with Netlify

Here comes the last step . Go to your [netlify](https://netlify.com) account and click add new site . Choose your git repository to import your website in netlify .  And now you can see the forked `educenter hugo` theme. select it and follow the steps. Then go to `site settings` for change the site name and put your subdomain name here what you put on forestry as base url. save it and go to `deploy` from top menu, Wait a while and click on `site preview` or just simply go to the subdomain you put as base url. **BOOM! Your site is live.** Now you can go to forestry and add, remove or customize every setting and content.

> If you face any issue regarding the installation feel free to [open a new issue](https://github.com/themefisher/educenter-hugo/issues)

## Table of Contents

- [Demo](#demo)
- [Installation](#installation)
- [Main Features](#main-features)
- [Reporting Issues](#reporting-issues)
- [Technical Support or Questions](#technical-support-or-questions-(paid))
- [Licensing](#licensing)
- [More Hugo Themes](https://themefisher.com/hugo-themes/)

## Demo

| About  | Course  | Notice  | Scholarship  |
|---|---|---|---|
| ![About page](https://user-images.githubusercontent.com/58769763/72678220-25331480-3ace-11ea-98fd-a1be7d839a62.png) | ![Course page](https://user-images.githubusercontent.com/58769763/72678219-25331480-3ace-11ea-84a1-679144fe3997.png) | ![Notice page](https://user-images.githubusercontent.com/58769763/72678221-25cbab00-3ace-11ea-820d-83fe7ee5daa8.png) | ![Scholarship page](https://user-images.githubusercontent.com/58769763/72678218-249a7e00-3ace-11ea-94a8-d8ccf1f1a9ee.png)

**The images are only for demonstration purpose, Please don't use those images.**

[Live Demo](http://demo.gethugothemes.com/educenter/).

## Installation
At the top we have shown an easy hugo installation. but still if you think you want to go with the traditional way then use the following commands:

**Note : You must use `hugo-extended` version to compile SCSS**

```
$ git clone git@github.com:themefisher/educenter-hugo.git
$ cd educenter-hugo/exampleSite/
$ hugo server --themesDir ../..
```

Or Check out [Full Documentation](https://docs.gethugothemes.com/educenter/?ref=github).

## Main features

* **SEO Friendly** All codes are seo friendly. There is fields to put meta data and other seo parameters in every pages.
* **Multi Language** We have multi language support in premium version . Right now there is two language include in the theme , those are French and English. If you need more we can help you out.
* **Google Analytics** You can add you google analytics code in theme config file to connect with your google analytics account .

## Reporting Issues

We use GitHub Issues as the official bug tracker for the educenter Template. Please Search [existing issues](https://github.com/themefisher/educenter-hugo/issues). It’s possible someone has already reported the same problem.
If your problem or idea is not addressed yet, [open a new issue](https://github.com/themefisher/educenter-hugo/issues)

## Technical Support or Questions (Paid)

If you have questions or need help integrating the product please [contact us](mailto:mehedi@themefisher.com) instead of opening an issue.  

## Hire Us
We are available for Hiring of your next HUGO project. Drop Us a mail [mehedi@themefisher.com](mailto:mehedi@themefisher.com)


| [![Mega-Bundle-HUGO](https://gethugothemes.com/wp-content/uploads/edd/2019/09/Mega-Bundle-HUGO.png)](https://themefisher.com/products/hugo-mega-bundle/) | [![agen](https://gethugothemes.com/wp-content/uploads/edd/2019/09/agen-hugo-theme.jpg)](https://gethugothemes.com/products/agen-hugo/) | [![redlab](https://gethugothemes.com/wp-content/uploads/edd/2019/09/redlab-hugo-thumbnail.jpg)](https://gethugothemes.com/products/redlab-hugo/) |
|:---:|:---:|:---:|
| **Hugo Mega Bundle**  | **Agen**  | **Red Lab**  |

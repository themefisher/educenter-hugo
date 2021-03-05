+++
author = "Thijs"
bg_image = ""
categories = ["Data Engineering"]
date = 2019-07-17T14:50:21Z
description = ""
image = "/images/1_1cez3tcvj-irys7b2thn7q.png"
tags = ["Azure", "Cloud"]
title = "Overengineering Azure VMs, from creation to connection"
type = "post"

+++
Working with and developing on cloud-hosted VMs is fun, but the process can be a bit tedious. It involves generating SSH-keys, configuring the VM, starting it online or using the console, looking up its IP-address or FQDN, configuring a local SSH-client… I didn’t sign up for this, time to up the geek factor. I decided to script the entire process from creation to connection. As a bit of polish, I opted to store my private key in Azure Key Vault. The private key is only retrieved temporarily when connecting to the machine.

In this post, I’ll lay out the steps for each of the scripts, why I made certain decisions and things I learned in the process.

[Read more...](https://thijskoot.nl/powershell/azure/2019/07/17/overengineering-azure-vm-creation.html)
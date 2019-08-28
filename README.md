# Highcharts 90-90-90 Cascade Graph Library
### 90-90-90 HIV Prevention, Engagement and Care Cascade Graph(i.e Treatment target graph to help end the AIDS epidemic)

<!-- [![Build Status](https://travis-ci.org/hisptz/90-90-90-cascade-graph-library.svg?branch=master)](https://travis-ci.org/hisptz/90-90-90-cascade-graph-library) -->
[![CircleCI](https://circleci.com/gh/hisptz/90-90-90-cascade-graph-library.svg?style=svg)](https://circleci.com/gh/hisptz/90-90-90-cascade-graph-library)
[![Build Status](https://travis-ci.org/hisptz/90-90-90-cascade-graph-library.svg?branch=develop)](https://travis-ci.org/hisptz/90-90-90-cascade-graph-library)
[![Greenkeeper badge](https://badges.greenkeeper.io/hisptz/90-90-90-cascade-graph-library.svg)](https://greenkeeper.io/)
[![Maintainability](https://api.codeclimate.com/v1/badges/4ee0db1dfe5a718d2310/maintainability)](https://codeclimate.com/github/hisptz/90-90-90-cascade-graph-library/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/4ee0db1dfe5a718d2310/test_coverage)](https://codeclimate.com/github/hisptz/90-90-90-cascade-graph-library/test_coverage)


## Introduction

Ending the AIDS epidemic is more than a historic obligation to the 39 million people who have died of the disease. It also represents a momentous opportunity to lay the foundation for a healthier, more just and equitable world for future generations. Ending the AIDS epidemic will inspire broader global health and development efforts, demonstrating what can be achieved through global solidarity, evidence-based action and multisectoral partnerships.

![](https://lh3.googleusercontent.com/2Paz5WEzd99Zb-nsxsiPJcGVBMPKQ_F_u63aN1ZnjE0p4LILD1DGjefSpHY9LdZ_ls_cFbdaqY9rtIM-Ro56ZblW3XVwmmuZn0GCgTZlsPuVFaCQWFLliG4x01ovQRoozdQgVP4UEn9GHjB-9g11J4yh3S24WYNyHtYW0Z9KOSxM3fp46YgdaobqhWDxqqR-yaL7iyckKX8tpt7gN92PjGrUe6cKCVnmaxO67p2TC2tlbY-nmYFk5KL3EJJFVgubM145IEgPPChhU58wd4OeUFkIldx3KRHhBBNyDDfduiv9O9Yn7nugjO6JIf-SAh4OS2IzuX4z7E4pX8_RhmwZVYgA_HoMFt3TnSw0n0dV7vc2MbMZQU30JRLRHizxayANUFnHOHFw763CweSZVcQOlyKd13ClkmDXg1huPTt07Jx_fcAWYqba9PjuxdqHiOhJqKbmxKfnYvdRvmh7Odi2lhdTHE8SyxvjRbBM_Vy_t5Alxev6DIGRFEtk-yep4Kr4Dxh43KmmtptYiFcIrZQwYHvqlGSiA3gHMvlWI7CDUWxWzQIPrUgaFtQD_GlhUtYTMJ9e3QtVUSHRd0yWDOsJdeI6rEdaNRd3rXNGqKl1elr0ZOBOv2yFBPCpfdWnhw=w1853-h949)

Although many strategies will be needed to close the book on the AIDS epidemic, one thing is certain. It will be impossible to end the epidemic without bringing HIV treatment to all who need it.

As the world contemplates the way forward following the 2015 deadline for the targets and commitments in the 2011 Political Declaration on HIV and AIDS, a final target is needed to drive progress towards the concluding chapter of the AIDS epidemic, promote accountability and unite diverse stakeholders in a common effort. Whereas previous AIDS targets sought to achieve incremental progress in the response, the aim in the post-2015 era is nothing less than the end of the AIDS epidemic by 2030.

In December 2013, the UNAIDS Programme Coordinating Board called on UNAIDS to support country- and region-led efforts to establish new targets for HIV treatment scale-up beyond 2015. In response, stakeholder consultations on new targets have been held in all regions of the world. At the global level, stakeholders assembled in a variety of thematic consultations focused on civil society, laboratory medicine, paediatric HIV treatment, adolescents and other key issues.

Powerful momentum is now building towards a new narrative on HIV treatment and a new, final, ambitious, but achievable target:

- By 2020, 90% of all people living with HIV will know their HIV status.
- By 2020, 90% of all people with diagnosed HIV infection will receive sustained antiretroviral therapy.
- By 2020, 90% of all people receiving antiretroviral therapy will have viral suppression. 

## Library Info
[Highcharts 90-90-90 Cascade Graph](https://www.npmjs.com/package/@iapps90-90-90-cascade) is [Javascript](https://www.npmjs.com/package/@iapps90-90-90-cascade) library built on top of [Highcharts](https://www.highcharts.com) to support the HIV/AIDS cascade implementation in treatment target(already set as mentioned above) to help end the AIDS epidemic.
Development Team from [UDSM](http://www.udsm.ac.tz) develop and maintain this library to ensure visual and usability consistency of the in all system where will it be installed.

## Installation & Usage
To install the Highchart 90-90-90 Cascade Graph run the following npm command [@npm i @iapps/visualization](https://www.npmjs.com/package/@iapps/visualization)
### Install 
> `npm i @iapps/visualization`


After installation in your [Angular](https://www.npmjs.com/package/@iapps/visualization) Project, then import the following dependencies to prepare environmant for drawing the HIV Treatment and Care Cascade Graph.

### Import
> `import { GenerateCascadeGraph } from '@iapps/visualization/cascade';`

### Parameters
> `* @param {boolean} useCustomChartTitle`

> `* @param {boolean} useCustomXAxisTitle`

> `* @param {string} config`

> `* @param {string} context`

> `* @param {string} ctype`

> `* @param {object} chartObject`

> `* @param {object} chartExtension`

> `* @param {number} initialTarget`

### Use

Call the method **`GenerateCascadeGraph()`** as pass the following parameters
- **useCustomChartTitle**: it is the `boolean` value parameter allow the visualization to use the custom chart title defined in the favorite extension in the dataStore

- **useCustomXAxisTitle**: it is the `boolean` value parameter allow the visualization to use the custom categories title defined in the favorite extension in the dataStore
`
- **config**: it is the `string` value parameter allow the user to defined the configurations for the chart to be used Eg: **'nacp'**

- **context**: it is the `string` value parameter allow the user to defined the context that this chart will be used  Eg: **'dhis2'** - **[DHIS2](https://www.dhis2.org/)**

- **ctype**: it is the `string` value parameter allow the user to defined the chart type to be used for the Cascade Graph  Eg: **'column'** and **'bar'**

- **chartObject**: it is the `object` value parameter allow the user to pass visualization chart object to be passed as used to draw the Cascade Graph.

- **chartExtension**: it is the `object` value parameter allow the user to pass favorite extensions for each fovorite in the context of **[DHIS2](https://www.dhis2.org/)**.

- **initialTarget**: it is the `number` value parameter allow the user to pass the initial value to c=start cascading to other data values Eg. In the case of NACP the initial value is `16000000` using **[DHIS2](https://www.dhis2.org/)**.

`
 GenerateCascadeGraph(
    true,
    true,
    'nacp',
    'dhis2',
    'bar',
    chartObjects,
    chartExtension,
    1600000
 )
`

The method above will return the standard [Highcharts](https://www.highcharts.com) chart Object for the **Cascade Graph** for the NACP Treatment and Care Cascade Graph

## Features
- Support drawing the **_column_** 90-90-90 cascade graph for HIV context in [DHIS2](https://www.dhis2.org/)
- Support drawing the **_bar_** 90-90-90 cascade graph for HIV context in [DHIS2](https://www.dhis2.org/)

## Licence
![GitHub](https://img.shields.io/github/license/hisptz/90-90-90-cascade-graph-library?style=for-the-badge)
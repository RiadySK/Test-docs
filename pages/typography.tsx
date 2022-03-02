import type { NextPage } from 'next'
import Head from 'next/head'
import React, { useState } from 'react'
import Layout from '../components/layout';

const TypographyPage: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Kaskus UI - Docs</title>
        <meta name="description" content="UI by Kaskus" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className="text-3xl font-bold">
          Typogpraphy
        </h1>
        <div className="p-4">
          <h2 className="text-2xl font-bold py-4">
            Heading
          </h2>
          <div className="grid grid-cols-2 gap-4 bg-slate-100 p-8 w-full">
            <kaskus-header>h1. Heading</kaskus-header>
            <kaskus-header variant="h2">h2. Heading</kaskus-header>
            <kaskus-header variant="h3">h3. Heading</kaskus-header>
            <kaskus-header variant="h4">h4. Heading</kaskus-header>
          </div>
          <div className="grid bg-slate-100 p-4 w-full text-center mt-8">
            <div>&lt;kaskus-header&gt;h1. Heading &lt;/kaskus-header&gt;</div>
          </div>

          <h2 className="text-lg font-bold py-4">
            Variant
          </h2>
          <div className="grid bg-slate-100 p-4 w-full text-center">
            <div>&lt;kaskus-header variant="h2"&gt;h1. Heading &lt;/kaskus-header&gt;</div>
          </div>
          <div className="grid bg-slate-100 p-4 w-full text-center mt-8">
            <table className="table-fixed border-separate border">
              <thead>
                <tr>
                  <th className="border w-2/4">Variant</th>
                  <th className="border w-2/4">Header font size</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border w-2/4">h1 <em>(default)</em></td>
                  <td className="border w-2/4">20 px</td>
                </tr>
                <tr>
                  <td className="border w-2/4">h2</td>
                  <td className="border w-2/4">18 px</td>
                </tr>
                <tr>
                  <td className="border w-2/4">h3</td>
                  <td className="border w-2/4">16 px</td>
                </tr>
                <tr>
                  <td className="border w-2/4">h4</td>
                  <td className="border w-2/4">14 px</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-bold py-4">
            Font
          </h2>
          <div className="grid grid-cols-2 gap-4 bg-slate-100 p-4 w-full">
            <kaskus-header>Roboto</kaskus-header>
            <kaskus-header font="vag">VAGRounded</kaskus-header>
          </div>
          <div className="grid bg-slate-100 p-4 w-full text-center mt-8">
            <div>&lt;kaskus-header font="vag"&gt;h1. Heading &lt;/kaskus-header&gt;</div>
          </div>
          <div className="grid bg-slate-100 p-4 w-full text-center mt-8">
            <table className="table-fixed">
              <tbody>
                <tr>
                  <td className="w-2/4 font-bold">font</td>
                  <td className="w-2/4">roboto<em>(default)</em>, vag</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-bold py-4">
            Body
          </h2>
          <div className="grid gap-4 bg-slate-100 p-8 w-full">
            <kaskus-text>body. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur, neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum quasi quidem quibusdam.</kaskus-text>
            <kaskus-text variant="caption">caption. Lorem ipsum dolor sit amet</kaskus-text>
          </div>
          <div className="grid bg-slate-100 p-4 w-full text-center mt-8">
            <div>&lt;kaskus-text&gt;body&lt;/kaskus-text&gt;</div>
          </div>
          <h2 className="text-lg font-bold py-4">
            Variant
          </h2>
          <div className="grid bg-slate-100 p-4 w-full text-center">
            <div>&lt;kaskus-text variant="caption"&gt;caption text &lt;/kaskus-text&gt;</div>
          </div>
          <div className="grid bg-slate-100 p-4 w-full text-center mt-8">
            <table className="table-fixed">
              <tbody>
                <tr>
                  <td className="w-2/4 font-bold">variant</td>
                  <td className="w-2/4">paragraph<em>(default)</em>, caption</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-lg font-bold py-4">
            Size
          </h2>
          <div className="grid bg-slate-100 p-4 w-full text-center">
            <div>&lt;kaskus-text size="large"&gt;body large&lt;/kaskus-text&gt;</div>
          </div>
          <div className="grid bg-slate-100 p-4 w-full text-center mt-8">
            <table className="table-fixed border-separate border">
              <thead>
                <tr>
                  <th className="border w-2/4">Size</th>
                  <th className="border w-2/4">Body font size</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border w-2/4">large</td>
                  <td className="border w-2/4">16 px</td>
                </tr>
                <tr>
                  <td className="border w-2/4">medium <em>(default)</em></td>
                  <td className="border w-2/4">14 px</td>
                </tr>
                <tr>
                  <td className="border w-2/4">small</td>
                  <td className="border w-2/4">12 px</td>
                </tr>
              </tbody>
            </table>
          </div>
          <h2 className="text-2xl font-bold pt-4">
            Color
          </h2>
          <p className="pt-2 pb-4 text-sm">For Header and Body</p>
          <div className="grid grid-cols-3 gap-4 bg-slate-100 p-4 w-full">
            <kaskus-header>Primary</kaskus-header>
            <kaskus-header color="secondary">Secondary</kaskus-header>
            <kaskus-header color="tertiary">Tertiary</kaskus-header>
          </div>
          <div className="grid bg-slate-100 p-4 w-full text-center mt-8">
            <div>&lt;kaskus-header color="secondary"&gt;Secondary&lt;/kaskus-header&gt;</div>
          </div>
          <div className="grid bg-slate-100 p-4 w-full text-center mt-8">
            <table className="table-fixed border-separate border">
              <thead>
                <tr>
                  <th className="border w-1/3">color</th>
                  <th className="border w-1/3">Daymode <em>(default)</em></th>
                  <th className="border w-1/3">Nightmode</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border w-1/3">primary <em>(default)</em></td>
                  <td className="border w-1/3">#202020</td>
                  <td className="border w-1/3">#ebebeb</td>
                </tr>
                <tr>
                  <td className="border w-1/3">secondary</td>
                  <td className="border w-1/3">#5c5c5c</td>
                  <td className="border w-1/3">#c7c7c7</td>
                </tr>
                <tr>
                  <td className="border w-1/3">tertiary</td>
                  <td className="border w-1/3">#b3b3b3</td>
                  <td className="border w-1/3">#5c5c5c</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default TypographyPage

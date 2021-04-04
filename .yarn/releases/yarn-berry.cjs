module.exports = (() => {
  var e = {
      25545: e => {
        function t(e) {
          var t = new Error("Cannot find module '" + e + "'")
          throw ((t.code = 'MODULE_NOT_FOUND'), t)
        }
        ;(t.keys = () => []), (t.resolve = t), (t.id = 25545), (e.exports = t)
      },
      44692: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => g })
        var A = r(54143)
        const n = { optional: !0 },
          o = [
            [
              '@samverschueren/stream-to-observable@<0.3.1',
              { peerDependenciesMeta: { rxjs: n, zenObservable: n } },
            ],
            [
              'any-observable@<0.5.1',
              { peerDependenciesMeta: { rxjs: n, zenObservable: n } },
            ],
            ['@pm2/agent@<1.0.4', { dependencies: { debug: '*' } }],
            ['debug@<4.2.0', { peerDependenciesMeta: { 'supports-color': n } }],
            [
              'got@<11',
              {
                dependencies: {
                  '@types/responselike': '^1.0.0',
                  '@types/keyv': '^3.1.1',
                },
              },
            ],
            [
              'cacheable-lookup@<4.1.2',
              { dependencies: { '@types/keyv': '^3.1.1' } },
            ],
            [
              'http-link-dataloader@*',
              { peerDependencies: { graphql: '^0.13.1 || ^14.0.0' } },
            ],
            [
              'typescript-language-server@*',
              {
                dependencies: {
                  'vscode-jsonrpc': '^5.0.1',
                  'vscode-languageserver-protocol': '^3.15.0',
                },
              },
            ],
            [
              'postcss-syntax@*',
              {
                peerDependenciesMeta: {
                  'postcss-html': n,
                  'postcss-jsx': n,
                  'postcss-less': n,
                  'postcss-markdown': n,
                  'postcss-scss': n,
                },
              },
            ],
            [
              'jss-plugin-rule-value-function@<=10.1.1',
              { dependencies: { 'tiny-warning': '^1.0.2' } },
            ],
            [
              'ink-select-input@<4.1.0',
              { peerDependencies: { react: '^16.8.2' } },
            ],
            ['promise-inflight@*', { peerDependenciesMeta: { bluebird: n } }],
            ['reactcss@*', { peerDependencies: { react: '*' } }],
            ['react-color@<=2.19.0', { peerDependencies: { react: '*' } }],
            ['gatsby-plugin-i18n@*', { dependencies: { ramda: '^0.24.1' } }],
            [
              'useragent@^2.0.0',
              {
                dependencies: {
                  request: '^2.88.0',
                  yamlparser: '0.0.x',
                  semver: '5.5.x',
                },
              },
            ],
            [
              '@apollographql/apollo-tools@*',
              { peerDependencies: { graphql: '^14.2.1 || ^15.0.0' } },
            ],
            [
              'material-table@^2.0.0',
              { dependencies: { '@babel/runtime': '^7.11.2' } },
            ],
            ['@babel/parser@*', { dependencies: { '@babel/types': '^7.8.3' } }],
            [
              'fork-ts-checker-webpack-plugin@*',
              {
                peerDependencies: {
                  eslint: '>= 6',
                  typescript: '>= 2.7',
                  webpack: '>= 4',
                },
                peerDependenciesMeta: { eslint: n },
              },
            ],
            [
              'rc-animate@*',
              {
                peerDependencies: {
                  react: '^15.0.0 || ^16.0.0',
                  'react-dom': '^15.0.0 || ^16.0.0',
                },
              },
            ],
            [
              'react-bootstrap-table2-paginator@*',
              { dependencies: { classnames: '^2.2.6' } },
            ],
            [
              'react-draggable@<=4.4.3',
              {
                peerDependencies: {
                  react: '>= 16.3.0',
                  'react-dom': '>= 16.3.0',
                },
              },
            ],
            [
              'apollo-upload-client@<14',
              { peerDependencies: { graphql: '14 - 15' } },
            ],
            [
              'react-instantsearch-core@<=6.7.0',
              { peerDependencies: { algoliasearch: '>= 3.1 < 5' } },
            ],
            [
              'react-instantsearch-dom@<=6.7.0',
              { dependencies: { 'react-fast-compare': '^3.0.0' } },
            ],
            [
              'ws@<7.2.1',
              {
                peerDependencies: {
                  bufferutil: '^4.0.1',
                  'utf-8-validate': '^5.0.2',
                },
                peerDependenciesMeta: { bufferutil: n, 'utf-8-validate': n },
              },
            ],
            [
              'react-portal@*',
              {
                peerDependencies: {
                  'react-dom': '^15.0.0-0 || ^16.0.0-0 || ^17.0.0-0',
                },
              },
            ],
          ]
        let i, s, a
        const c = new Map([
            [
              A.makeIdent(null, 'fsevents').identHash,
              function () {
                return (
                  void 0 === i &&
                    (i = r(78761)
                      .brotliDecompressSync(
                        Buffer.from(
                          'G7weAByFTVk3Vs7UfHhq4yykgEM7pbW7TI43SG2S5tvGrwHBAzdz+s/npQ6tgEvobvxisrPIadkXeUAJotBn5bDZ5kAhcRqsIHe3F75Walet5hNalwgFDtxb0BiDUjiUQkjG0yW2hto9HPgiCkm316d6bC0kST72YN7D7rfkhCE9x4J0XwB0yavalxpUu2t9xszHrmtwalOxT7VslsxWcB1qpqZwERUra4psWhTV8BgwWeizurec82Caf1ABL11YMfbf8FJ9JBceZOkgmvrQPbC9DUldX/yMbmX06UQluCEjSwUoyO+EZPIjofr+/oAZUck2enraRD+oWLlnlYnj8xB+gwSo9lmmks4fXv574qSqcWA6z21uYkzMu3EWj+K23RxeQlLqiE35/rC8GcS4CGkKHKKq+zAIQwD9iRDNfiAqueLLpicFFrNsAI4zeTD/eO9MHcnRa5m8UT+M2+V+AkFST4BlKneiAQRSdST8KEAIyFlULt6wa9EBd0Ds28VmpaxquJdVt+nwdEs5xUskI13OVtFyY0UrQIRAlCuvvWivvlSKQfTO+2Q8OyUR1W5RvetaPz4jD27hdtwHFFA1Ptx6Ee/t2cY2rg2G46M1pNDRf2pWhvpy8pqMnuI3++4OF3+7OFIWXGjh+o7Nr2jNvbiYcQdQS1h903/jVFgOpA0yJ78z+x759bFA0rq+6aY5qPB4FzS3oYoLupDUhD9nDz6F6H7hpnlMf18KNKDu4IKjTWwrAnY6MFQw1W6ymOALHlFyCZmQhldg1MQHaMVVQTVgDC60TfaBqG++Y8PEoFhN/PBTZT175KNP/BlHDYGOOBmnBdzqJKplZ/ljiVG0ZBzfqeBRrrUkn6rA54462SgiliKoYVnbeptMdXNfAuaupIEi0bApF10TlgHfmEJAPUVidRVFyDupSem5po5vErPqWKhKbUIp0LozpYsIKK57dM/HKr+nguF+7924IIWMICkQ8JUigs9D+W+c4LnNoRtPPKNRUiCYmP+Jfo2lfKCKw8qpraEeWU3uiNRO6zcyKQoXPR5htmzzLznke7b4YbXW3I1lIRzmgG02Udb58U+7TpwyN7XymCgH+wuPDthZVQvRZuEP+SnLtMicz9m5zASWOBiAcLmkuFlTKuHspSIhCBD0yUPKcxu81A+4YD78rA2vtwsUEday9WNyrShyrl60rWmA+SmbYZkQOwFJWArxRYYc5jGhA5ikxYw1rx3ei4NmeX/lKiwpZ9Ln1tV2Ae7sArvxuVLbJjqJRjW1vFXAyHpvLG+8MJ6T2Ubx5M2KDa2SN6vuIGxJ9WQM9Mk3Q7aCNiZONXllhqq24DmoLbQfW2rYWsOgHWjtOmIQMyMKdiHZDjoyIq5+U700nZ6odJAoYXPQBvFNiQ78d5jaXliBqLTJEqUCwi+LiH2mx92EmNKDsJL74Z613+3lf20pxkV1+erOrjj8pW00vsPaahKUM+05ssd5uwM7K482KWEf3TCwlg/o3e5ngto7qSMz7YteIgCsF1UOcsLk7F7MxWbvrPMY473ew0G+noVL8EPbkmEMftMSeL6HFub/zy+2JQ==',
                          'base64'
                        )
                      )
                      .toString()),
                  i
                )
              },
            ],
            [
              A.makeIdent(null, 'resolve').identHash,
              function () {
                return (
                  void 0 === s &&
                    (s = r(78761)
                      .brotliDecompressSync(
                        Buffer.from(
                          'G1QTIIzURnVBnGa0VPvr81orV8AFIqdU0sqrdcVgCdukgAZwi8a50gLk9+19Z2NcUILjmzXkzt4dzm5a6Yoys+/9qnKiaApXukOiuoyUaMcynG4X7X4vBaIE/PL30gwG6HSGJkLxb9PnLjfMr+748n7sM6C/NycK6ber/bX1reVVxta6W/31tZIhfrS+upoE/TPRHj0S/l0T59gTGdtKOp1OmMOJt9rhfucDdLJ2tgyfnO+u4YMkQAcYq/nebTcDmbXhqhgo6iQA4M3m4xya4Cos3p6klmkmQT+S4DLDZfwfMF+sUCx36KleOtaHLQfEIz0Bmncj/Ngi3lqOl4391EWEfIss6gVp3oDUGwsSZJKeOVONJWZg+Mue3KUMV3aMqYJ+7b2219D+GFDi8EV5y/Y+5J+He0oNjKAgqLsJziEsS9uIaCu3BHBKSXxNKKa2ShbfglcWoiiVT2kfGI7Gw+YJ/Sqy1H6wdFWtyVUQIa82JPwbeV25YKLzc5ZIFM6GCPSA+J9dTvJbs5LuuKnLP3f09gCu2jxqsAv6CA+ZySVaUJr2d3A70BC/uBCKr2OVrWgC3fSwb7NlfkgSEEiejrMGvhya9lMbVI6lMsFKN330A1/FOaefHQdNGLEZ3IwFF87H3xVlM0Xxsmbi/7A60oymRcIe0tH90alG6ez/yA7jwYotxuHWZdR+1HlMcddGHAV6QD/gXYPV0wnNv47I+5FGevzZFMqWSO8GU4nQ3FjsdgdJcD+c1rvudERKuLyd7bxiBpnsMDHsvPP4nXdXkld/gUNks3GAE1Otmb90bavDyiw4Mrx496Iw+jbLTgsCZGZXSZ9vM55C7KGe4HyJAKXEk0iT/Cj/PFwLJBN7pcP7ZFfYtUApGTWKkYhI9IE2zt/5ByH72wdvH+88b71zuv/FMCX3w6x5nzhY44Cg5IYv9LeKwHuHIWgPbfgrAcUxOlKkPRdQOIDF/aBuLPJAXD+TgxCNXx4jQxeR/qlBWVikFPfEI4rXMUc4kZ2w9KbPKYRvFUag0dVlVoyUP4zfidbTXAdZF88jAckl+NHjLFCNdX7EQ1PbLSOl+P+MqgwEOCi6dxgWZ7NCwJBjWKpk1LaxwKrhZ4aEC/0lMPJYe5S8xAakDcmA2kSS86GjEMTrv3VEu0S0YGZcxToMV524G4WAc4CReePePdipvs4aXRL5p+aeN96yfMGjsiTbQNxgbdRKc+keQ+NxYIEm1mBtEO29WrcbrqNbQRMR66KpGG4aG0NtmRyZ2JhUvu0paCklRlID8PT3gSiwZrqr4XZXoBBzBMrveWCuOg7iTgGDXDdbGi8XHkQf5KXDGFUxWueu5wkSa6gMWY1599g2piQjwBKIAPt4N5cOZdFBidz2feGwEAy1j1UydGxDSCCUsh314cUIIRV/dWCheceubL2gU8CibewmP7UxmN5kN4I7zfQhPxkP0NCcei8GXQpw4c3krEzW7PR2hgi/hqqqR58UJ/ZVfWxfcH5ZKMo4itkmPK0FCGxzzIRP20lK/gz28Y03sY233KvSVWUKl9rcbX6MbHjpUG8MvNlw72p6FwTejv92zgpnCxVJnIHHZhCBxNcHF5RTveRp513hUtTHHq4BIndlytZT5xoTSYfHKqKNr4o9kcGINIz6tZSKRdtbON3Ydr9cgqxHIeisMNIsvPg/IFMZuBbSqqDLeSO5dak1cGr76FtH2PC7hs0S0Oq3GsmF1Ga4YABAMGcdPAWzTk26B7cKV91I2b0V/GYvnsEQ1YGntRqi5EQqTlgZszbV/32GuZtUF49JOA/r4jAdwUOsbPo6mNoBlJPYjM5axrZaWQf33bFsLWqiyvvDOM4x0Ng802T7cuP2a3q98GWq6yiq6q3M77hcZlOUnmryctRYmI4Hb2F5XixFohkBmySCjU+M7/WQVE5YAtnlxiUJDhFN0y1tNeMWY9E0MfZi2rQ4eC72WXjsAA==',
                          'base64'
                        )
                      )
                      .toString()),
                  s
                )
              },
            ],
            [
              A.makeIdent(null, 'typescript').identHash,
              function () {
                return (
                  void 0 === a &&
                    (a = r(78761)
                      .brotliDecompressSync(
                        Buffer.from(
                          'W1w+GkWwcQCPbZnUKPI4CFN/7EyEjZic7gS0LuAO0yfO0XnBUqmjRfsndcrEHKBP46+kNRcXE9T69UCzOMQD2EWA28SPiEUXz6UxaKl+dNhtngmN0KaY5gpIi1/+TP/v5+ul7zo6uRXScKu4Va6wcMpgwWjlQmZyLR397/MiXMMwmQ2WvoleaS23WLFmcLXTID0zCnXDyL3LdHSWRzWaZNoLpQ9ftzCssvn5UUSQrkz2sjzf3FK1NFu+8MED3YPNhfn/v5/12R4CVF9IQuGG7fgP2feee7pDDUmqVieV+oB0zrn3vaTyUtWAVR8A1BCrGaPH2BFy2OkUfQTXowAdqflCqJlUTVednHQBLhT0zgNplLM1/LC3YUtdVskGoP/n5IyllimTGsG0NiyeBsnDvH4hH244pgDEQlJuVFqDssvZiI4GfTjk18cws931bs/fNgZQUYmiSRwdZE7xvHTIs32JGu2uwAFKZKNm70VPRJNCpGAyptX+XMo0EYIMW+yfv/zpskSSzFwETa/caJp1bP8q7M9KD+vPBeP7ltn/S/T63wuZer7nGibzgC/N86sEdD34FbrYIfv5F55+7bVf/STBcAM9rTWWnzIYiKTay4uuRz9aDz1HiI/TeSXrj01C7+4FeNlKohYUwh1qXjemQMsA7KWH4IRDSrz8UaMQ5e6niK87ZFzvWB+6cn6IpWkrDPYI+LccLeGDX/DjRmmXLSGqSbu/WWcMAapgUUR9G3oqqY9mKz+GXe1HPlxFqBRbdhzQbxghtNtlE5TL2qkf5+arA/5VdO5ZrOH+kWjf6tx/bbXyNntYEVEl+ucEeht+7F++iVCO3lpE64CAVx7+6FNBcAO3m1AB0mTOMwIUDj1x5S+ma30rDtHMWY+KOF6d3arYY4j+tx008aAsS5fNfP1+ykdDDgYoJD9pHr+K2Wh5m1MFc/Vap0k8uXi1iivbu2CuV+oLD00s3gdd7XTaHBIYzGLjy5SjHbYO6IkbTFtHzlwfqdIsdb8CjpaChourHi63UT1gaCFBIvQr/kKbKcUX4sdOFDKI8N/kaaISAVtiu356imQHboaw4apcePacaTwFAXdejxkgicEn0wRpVzhZd1W/sUByw4X7rqPMIVlhS+3o+8I9djctba2396mLfpdNnSzoN2QyZ2A9PzEPmLs+x3EUNH4EPic+KYDtCNNEYKJMwupjr9W6GNPhTs877JpSFYGxiAzFfKZINCng6GQoGbMHX3gxgznmtgDV+apTCz9MzBpe7pUioV6Ckv4bpmXPikXOg2pfxpNn+RhLxQwsU0Y0ILkRGUFsbWdIc3MPVC9Kyp+aRSH7ufRUV5irDZgCzr4oF+ZQpAwLv3hrwX+/c/cqxIsw6oUQcXFCySTK+ZACOwcZm4FwOcoRDlGTdERvi5xePFkjoBz0OrUmoCAB7eRjBm93fmb4Fi/jmDrfAFXG2ryCdGVfkJzOap1qqXsmQgAFjf3UMIyX60yCl5nrZ4RA6PYYoDKP/gabiPKtkHDEzEO2N389febkiCRZPiTlI7Z5fXzo/E+8tKZXrtDRd+fozGKAfMg8l9FbZhHMX+w/2rlggkIouL4LpXxB1PzweCqhj5rdeIremOt1ZKHAU8+547LJnpRQG02p8tMmMeGSuOvsqP6O1KVyB6SWvcw5rFKW87N42c2myjca3Vjt2LMkPrbz9FfYmJJLlI18upFczbc51+dTdxUx0cpNkFIMiBjru9+tXzGHQ+HMT7nsNVfkJjW/asI0WVmvLJzcuDluyz8h+8UGZTQXExSCw9O9kD3lZk+1eXswBd0jthuq+4hm3vQtqQIMtbejHjQCISfPOGFyjjlaEo41utZWunTOz3N1DRK7ho8np0bv4fCTIAOy9+JiaumSo8+7H0Cg4CIICjqp15L84qMQ477qLQeW5Zed2Xn+9DKSxHFYu4UQ1rnFbCIX12+1NScfCujiTVYtcppJAPj2DB27ctiNSLf1bRSbEHmzLwqM7HW7Kn9vzUf+hTRQ6iQ2y3RGUnoanyvESLRxOVNTWrcCY9dXv1/bq+GkwMXbo5PGVYnb9Q/sOq+tpVsOvJnt2nBnq4LIHT6EBYTZXoUHez41cJszqbPoyz4pJMX8nhKFI5dbWls7fpPbVaIrqhkgvkkvuK3oqTbQkKv6RXiUULEgyC6NHvFlAgL0EdVIbMQG+1byGiYRtq31I5U77Cpc7VonG7oPgiYbfuXCAZXXVrmk85BCObe1DRj3obm9xwDY69ZKCemnOlGBkB6+LbAIoGBk34KATc8ktyyoxmtdCjnJ7Uhgihw+QWZzRJwQBSY7Z0R8HeEQ/pUvl6RzCrMFI0lmjTh7pK2cvW4G6APAhAoHu8TlVeL1DJOBqW66oRjtC5VEoig3xg7ybQmx9h3fSCQaefhZbunZbf1DS/YZFSuHZlh+aMb8x5C5uUcv8YLJpUlnNB79aJPt771o4XlpExDHD04Rsfgk/SUwiL5rllcbL9XpCrHVOBZhNNfXqMlDOJjL9sbALIiYV02uk14sOY/JoPnJx8sxIIY+iFouatS7AU//Cw17qSa2uWodwFjeY1/Ouw2iv29QLUKWg77BKwnwPHPf45VFu9dPABATrZ2P/YEYy33tjHJfD6u90W/bqk3fX67VYKbktMpAGbZ6VdPuu4lUg/63irWRiCMtozcM3sCql/Vxdf/mjGFVpYgmoXp4LacW0hWoYnW4sBOVw/FbgOLMCvl4Thg9D21xyqGHeHgQ2H0YPnZTi+7u1P0Lx3nCKpyVVZtEkJs7Mpri/iRBd18aEFdTbzQF37AgVmn9PNUUNNblFpPzuTnvfRrqz9mF1OV9Eu/Ncj7DlxeIc69Q/r53Wdfn5rwffHYx/HsU9ZMIFbra7eRKVJ4zPP8v2ESdKxoFDoYPwNt++y4sU9TJCmvc61y8ecV7Bil1/BWMH2hsRJDvsPXnVtVkKwb6fg20IT9+DLzTx/y3SJrsLIlt/LONXfOiOMjG9riLVagboHG8mPzmewlQWLFvL6NciWO+hcP2lyr+gXx8c70MGCBwKmelr67I0cUzYBlnu2J90JEhPDtT0E57XgAxYO0fVdJSS/MtxQONPfnPBMNY424/sGnpB12aa/FdB3E+7XdOTvtHn61T0MwHh0GtgdgGg18//zwFDcQ9Y6rFZnuyndmycJnWnEz9D7lV2V7IjcvT6GSgxx9E4VjoowXhIEAQtDGPdhA0NcPQhQsAhJnxrsiFLmyBhdW+i5cCJ60RAFiJKq3ePwMDl3ng+8BgpoXv2c3QozfwvNiPvuC3A295+FxgK0PEiQsAIIAZW1gNaNvtNKDX9QgA8AgSmo2yl4P5wGamA6hHL+DYgRemwp8KnjGO3RzcowQrAGznF3/586f/XkYv2IN55GxgOdNm+uBCxtHal2+dmeFPCMboO4IBbRcuAGDT9F1R2GnAyGqf4N2Ji7RGACAaL8IxfVUod2J3/D1eh1/Ulq++EBXu3el1SgYAQJshkP+f67/+7Pz/Y3Rj3KKrny0TjGpV2VFcMKiaXw8G0B5S8pOcbh/N5gvu8IQvrK3tdeotAEDDjLJ4IrIxlir5hDRvTpOsEHZdquzuDth7/rlMAMBCQdNCjD9U08CcebX5TOUISzQxw6LTFgAoctVpw+KqS7RHNeZcqbRLAKBFleRw5DMVOO2/2l6HNoLCYqbXKWwBADsZbWwLYwG21l6bmDKAN60RAChFEdGYhvcCel+cBttJND32cnSl8ioA7Ga50Yxr9No07X0tHwX9N4GPbETVbzNfTZUtALA4Ntxow+AqJ9uPyopxldWNAIDGimRM4+ERcf463QkjY5fMa2K+KsaoSa9TMgAA2pUeqHGzZ4qfreJJbCUzttt3ANkM+xz0Nn4I6yvTOxeLcn9g9IQf2OXudeotAEAxy3kaN9tbDEYNT1ob0Nhq1+FdLxepmQBARO8gIuBv0vaTCeqJtxztcRrDsgsXACjTdLsgbBSetbxo7SfvejkplwDAaemzDxdf44S/VM/f1/5yFBesdeECALV4bvGiCUeeRY7WbnnX5KRsAgAWbQmbrngnXi01Kb39aXSXEqwAcJ3laonKN6Hx3plriPuM0J+oz9LYK5V4pMYFAFbMvlLWcIerqLmbq5jWCACY0PqYQkV37mmlpNS9KjFXIz4uCdxPqgTTUXqcYZu8waKpOxLI6JuC/V5ksD0JpWyHgyT1poEBU9LhF8KTrthVERadLLToCjoSr958kVOhYyzBcDVw5Ndnl0fn5/E7Uu1lV2uJv/V6oe8Tr7qIGZ/FXyhwbF0IGcm+PWuvDt43oObzo4dN3gbiB9M4AOe3H/NxCh7619L5VVqzxfL2JmJ5fXXv4zJ3IY0ErqSfJ7PtGEktqiboa5y/Q52IEn0P8mYMFxAe3t4u3ax2+SY5p5obSRj3F+6kvjC9qstmdnG7T+TjF7+r5nWaYxkFSAEDL3fLK/8bzW6MQwOFhyLVtdnHxsg+EIYpRuoyY6edsN2djKfaEzMckzlI95n3WEGyGlfHyFw4JOw9rTtLtN+bxrAGyEVDdGnVWK8YSwreubXAB1qsoatSBnTTKcv456EvBhSCO17tehk/PyuIBT4gaucnrjhnAPp7DuQisGahq4p0/CRE/HG1qLo0Q7iA0XvTHate9Dh29ogluynBd/gx5I7DbX3w4L2QsEMuP+XCF6UNYcnOuVsGRukgCilp3TSNNF4kUQURoktlSM6Dj9DSUGOUWiwwpKGyzHE//CxgDPBxPyUCGZrxW4ZlkdRgBUIWbF9mG00rsSUy1obI/qbMIZGfjC9yukfd9UhoYUpvDaHjO7hG44Udz7OeR/Zrp5E8nwR3/1mnSuXjfgHEl4mcT17VGU0cOniN9XdALACmBu18UycBEU5/pPKjLXL8Q0E6pTHlrFbyiFBtlJgNfKzYJzHay9Kc+s2DGBwIvDCqj8cn5nS8lm1cXyBfd3l18QmRuiyQWmQPMjmfJRBeP9rxQv8T6fhQUanWZstFi3aNN3DO+9TBG6bDVxnspz4XBtWiwsbVN6cwY0K9j4kJbMPLcTQMP1xKAgAb9mZcea1MX1oXNVeNS882t2HwumNLuGhFk375yWps2MeYtH3cXRYuWv21UwDEy3Jjr+sURkgo45Os3/LkY77VdRKARZNJS1UOZlJH1uwIMIM7bNKYPM9JOMaFgmZh1nSG8aZRChKaLItYBTyOWP8iMV0NWwf1Z7ZMxoZMphQGQkIO6Fp0Xe7ye5npMRFVjzaN5ETLVKiKQzHBu3ocLSODGbF6kZHa7SO+jsz7aO3+EV/zf4/VlfCSRx7ICP5hxjqU7DgTq1gktzOL777yk/gmO5RjY62fRfif39YGBi2J1YKBiTkT14Mh6Ncog6LCearFt3pYpJMTu2QXxjvdtlVY8J4HxBG2V1f2QOKHq5OFB7xo2WT34wIQ0esyQTjlkE/HgAypV1iiWWLHxW/iiB3m6+y+IS3LoAZ+mOEa2qatUK+ZFFyxJj0Wk1E2ZTr16UcSEvwn+rjUyN0k48p8Xm/0iPXaCbDSJTZuDcWySeTCid67IarLslDs7ZpwAC6hcs8eFiZe+um1sdkTCpNjdHG3N1f23j4UwxkLWmaTLbLxSTGDnktFEdfkVKrzmol49ZZRVnafOxvtjROKpRG3N1N2Cnjahr6K09GoGG8UzjazD6J3ZJS7JHKls5Wuex1VarJDBWNdiV8Jelgy9BIChq3EbTUCjo6UBRzCO7Dn86RqagkXvhYr1sMyo0wb/byZo8QspZN/ZOft1AjjBv90LL0vKNKpidcs+MzVW39s44JVOZ6yV4iPPVimkIuasd+2lBNGNXu/RACmVL64PGoiuNbUZjVaz2R1xq4zoVEy9Jiq7kyHJ+g+JVP3mkUMdaVpAIYVYKDGZ5TMAID6i4ZGFz71SWuX+pWiCQBIQDHlDsCTJXDgJvJc0rcnbiSTkib1IrmQjbqDrcdknqx7tSO6zTQqhrUCRNzMAMCQvqJI0o6D1r7B5OuXQxMAWH0DZ1N+BUBnCvSx38rs8wLvsp6KRFOoW92ZnCF68OpeuygxFQCzmsgKEa47efretdO61yaBOU2j1rDWAm0nMwDgY6Co5ZLCCmS1s9QnhyYAkBLYMeUawDobQEJWbFmWkvaP2a93BezvXbyp5e7g/7U4LIj7cYjwxOHKaQYAHIRZnnyCXXlnjs8FSLudBPNOc/MZED4dsVaP5cXApLp9EGJw2OvAmIBdscLuuemG2cHCyKyx7Bml78kupF8cDgybmXnIHz0cVVRUjK803dX5Qab7hSkmaMmHycio6VxwM4+I5V2nzLNXMi0r0EAliMp584sZIc1b8hU7xR8Z5qMzAZGlBdy/OvvIhJWYF1P9mDSjL7LsmKaBIBWXs1+1n1CDTmvK8DKnx4KmYSIVJBK3pMLgUPn/ngu4ZW+Y4jBBKYUSvZ0qe5CDUHn06sFL8eqdg92tKUkezfWR+WzUPH7wZSbPmcCWIsOwqjOiWR43yt6uFtUsq6HBLMXzruosfbKTmCCT5jiW6em5ojGzigzj0oFo9x/sEb00a1t7+t9DeBZ1x5lPQEnvWNfMCgnzM42+1LxOp6+yONAw7UUF7rycap14bp13FpBEoolDn+3wHW09u3jUYHjEQW8ac8ucd8F91GHZRkBlXxDWRJey0sKrL4+ITdBdNYMUXts+Doyeh8gjxYWJ70HIMAgthBhd4xga0pScg+PBlG+zeGSHNTv25Jqym85XIsVBOmSQ46+2Fp+Fu2vIZ8v2JVsaiGQOguhiLD2gfXqasd/I4Qd94PCE8rTg61hVOCyIR2nMAICFs6WCcJZBL15MzlX2qYKvTX+Kx7/LBACmFsuLXTzzB8wXcXfxEr7A8QJmGtEC6LF62dN8hmNO7hjesDCeHePYrMNzr6u7wVU7IRjU6S44B9TP8r4zJ0vbx4iy7VjcGgfccHKY7U31SwutCUfun0NboOw/mgDxuaG+f9W+Hrn1Kv2kNEnthUWP+6SbG1/YjQ5U2X3v+vPZ1HWvT8BhCxUICv93H0bp0SbhVbQPR9A59CMjYSnHzMYvCH/tOEEo4Ggr7Vcx+rHXmmn72aUpi52FNlpSC6TJ0Si+2H2pnh8vepfOrKdGYG0lFgkWWfPD1sl+VHSfNb7fOkWDC6vIXPFzuFvw7ZihgY/FlVuMG30lC5+d2dKZ/Zd7z+c9k10vqUNscuBoxaO1VLfeCbIvOL9+RWpHhzU7G46TgHv5C6aAiCIqK8snWuHnTH/e5Olj1ZcAniIilXcFw3rlNwLuupkBgF2AVhNWopRenOqR3d4GaFyaAIAMzJbdbxGYm40SAGwXLbNKJs8AeVHSlGpkRJePDkDheS3TB9dfK+n2FhFeyioHwEeExFBq0mP+Vuzk5B/I+G/cZ0R0Uk85AD4k5MYNlw71J4f3Jh8Pbyfi+o+IWIfEFvfj1XhGoEnPZAYAJgIxqwlPqSgygGW3NwEehyYA0GTB2az7O/ZDbpMAgEZWNKvpPcz3yNR5aW3w+hzi/7UqfUhscT8GUXtqRfEzzQwAsPwp7fGIKYqMOzY/8KcLx81i18ifpptRmr8VPT6opL9wU3grbmrhz7c9Skaj4AYhpJbH1j5Xgm14ZN0rKEvY7j75ESj9xY8aAdMJFADdy8sMjR2FL8BpN84vrWIUPvdrgpMraslLa2oK+QJETX712brJqogh0j8EtyjJzUOGHIGyn9ONBdIBkD0BkWTfWgkdwItmjaZopqn2P9rRgLXpYFr6RIEr0+4aybofbaud725r7sB7F6TqGUa1BwLjuqjw6wo69En03bIjqOVFnXP9RwgSYaoNnNrWVHfQ9Rph7tqP0pAce+xDXDruL+rHcz6ln2lhl2aY0mE0yb0Byz7yjnVtQw+pv/TcR9ZePJqQKjl3lazZAaKI9TxKhwWhzxbISAmnQzsBiJNtGE3ApmUYUzfA4KaTxK71l3dnVnW9OkwBAF+rnZnUF/dOqbMOYZRMX9tXHlYn16QjrVItvUoPkuGpvqf0YWgPXOSO0IzQod5ofO2O/gzdmk94YAlD/CqD/o1pCP2JNhhFftGwLUaBvNlL+tdJBLOhBUZCOpik6IMamqdK3AnDxBg+16WKa3WE02KzpCC3msVpuGGKnY5zNGVToAc3sZUVgevfZuhzOhfprO0AHJ0ck2kxSE2c2GKlwUhxyZGUmc7JpFh/ZktxOQ47vAAh7I4fD0MRKW6Fk1QYOGhFfVPDUZXawarezdJtWzwpZ2WiQYZfiKDvuwmupCjWqyp2R+hCRtw9DG0ww0EEXEuCUsgexlgwF/05fhIOXAA6/Int1cvu7ni0ptzkn7hi2hQ72CFrpPVG9U7XVPc8bJIVFtuFStUC0Ymw4AsLcrJiqp9gcYoDYrgLHJqRPHcrms4maIQ1Ket4RBgu17M2T0pASvSFthi87RJuDpVEkH6k5dR1ykArccYr+bmFoKY8u8rVz/dMjfe8VwRsMq/5qPLvTKso5B1mV9NptFcJkKAoJ9EiP3/sxVrsVB6MdUuoQxMwIs3Rl21sjpABsWWwbJBBLogFg/UivowbwTjhd6fo7NDhjO/dVML5RAY/PMSSuqOKxtSguJnAG7PYzbuN/CVMlWvz15VfTe5hWjGp4IwZpDQRJcKcsMok0p86BrSMgQrLGaKLgeI+o6Xjs1xw3FXuyxJtM+ZzOco2b8YwxBTw/NHPM8tVu06TiCisjAdElQ3cRxb8Trca+MyL+QbicxmYkVlZZoAtlkVzfEgfak67uNLjxaIdXQFD5ibCBfPpNVHq8Jj250wV7DKILjsePNvIR4x+TD6WWFC5nsNoXj3H7sr7fhYfh3WO8meCv95w2CaVcEXiw0VaCeWhWUWnbirbtKcqlO3nKeFnv45hIvQTRBuGFDvkn7MGDNjoQm50f+la/j5Tkaei+bBnTEzfouLBTeLwIlrIw3saHYRowtRo9P4QDl+NIumkebp5/WnSzE2+xjPAwl+rmqvkwfOkUfXcus1IjdfiLxUzADDgGtk8Yor/17hExdmvqXO5ae2oVI3FbIYrEwDA3BnrbCaLmQ/4a5BLp45+5XsSWD0A1wpoLe769NGrL+CGokfiPiDqMBDP0RVPkuU84euRruOvPSFAdbmsjljUNAWgVh378jd1xZRmqsJPRKODdwKhPiDBBatW7DAMEUoCRQ+HAEqSWPj9XN+/ijxXTFXzt+T0EW0BIN2yZZubSxwHwAddxl1j67kDpzgDjSDSdQlj7YhkxQ62PZsu2rnIbW8BkUaraxON7yZRTwDb00LdMfFa2hmtBjGWzfVm/GOC5LSE0RLHsp8enD811dvrof79paGjqn0SLX8t5TVb0gUQ6MOu2lwJfP+O6d2Vh2ULJSDp+5HB54V5H+CNN25tXvrIM3Exe1jX2WMCJrldyxiIItGuRwvlg1K89N+AyTkg9k0TW1QxO+2ZBH2aNKpNmxxrUvtQUn9AcLo3cNgbDru8mfxwvHPaDHr6k/EvS84yT+8fzP5FpFn75MLfj8EwbhZ8XA2o10BzmE8XWhCsO+vYNg9pGFPWbki0+dipJBpAh3FlZ13n0OzgVbBypRzreqSsdapRzjR+kT8ajyv/wxlufqwztJpldU2HbjTrhHeSBKPhjLO5fveAbAx8KJxm/dl5vaSbdVSNw8xWrmjS4dKOb0LE+bGtct751nCJR/6aieShrRLXiGlk2NTevGkUKt0Jm+XC1TSjbYqQsmK6rtHecJfAVDbEyxvTF1jFp/DAASds88fYKuhmMbWiuZnYTJOWEfXjTsIZrqGZ/fFOBg+ux2bAat12KYxskoRoUeTH6ZLThB/f0+eCqfasE1AxXaAFA20ihHk4cEJsZdaYAVHoQUlLCq4pa4mCAM2NNN5vsDgfLS0jvSP38yfaxiYoOHUmJisj9kr05cPOnh4+9rSPbNJ9Vs/BjnqB/8qr6Y+rew1G+9xsMFWSe4gJ85kz7rpMZ3RGTrM6LbCQAmf1TaWzYGIdqGpcmzyJKaElwibK/S5MK6w5JHjfTNxXohxKX0hlsQy85UphZQbeCA0s+6+nxOzKL3hCyO/j9Ra2d4RN2W0p9OF4xBfEubmu7Mi1Zd5mJ4G+ctkiV67Hv3zUB6IjPW1CW9M01FTYpeP0w42u+I2r1QZVvE2JsSf/Y1X3MHUbJXROEw7yryYQIun3d21drZ5J2ZKUQNcBPkssPg7x2jSqgpgtgtc+1BE7rfDKGKnn3I8ZMx09ZKkxYhdXorKgaZs3St6TuEx5Ejj9CBgsuHyKsWtaZt5hwMAXyYlo0kd6KcxJMyKxGxpItyH/bLPStYdIF6tC05vTSPQEJ5g54kVuqyolx5yEFa6BHUWJdBLHrQWmXZfTEqZbHbtlmeQpmu/NvVITfcb1Um5EIi0dEGJ7cOMls9vbPIamwpPF6qLiUEbvqh06xsT5bk2LQoa9aV9KiiJ2CAEC5iH271UUxo8HDcMN+47Woypfh1IKCFsxV3Bp4+pShdFt5CoVNj5hMn3stg30e5U+9e8WVeM9nsVuw19bcbjRQ1yJ++h0dtPd7ne8E86JIs3uOm8MvvYmbIprFoID8dIBKroQMIaGHclF8KscsOD468XQYSpYMAZhRyd0tBtfvxxeg8g1OFErQaPUIXEmYXnvyt/vnqNY2qkI9wxepu0m0IEVwOLLmOxipZaba2SQlSwwLeZQSGxYbsA7PxY9CpLQnwjsjWwFnJwZuL8pBT4J//q4Gjwi5Lgfp67KUnt8TfEzhRkAiPxx+nicm9h5UyhhMepDcxKbndNje4zmRc5MACBTz8gcdGHBJmeQUyV6d0vremf1AwCZBZEqQq0HtJ2cT9ugHebFcoGWW/jTAWSOTXC3OJsc5D3znTrcEEpqviR7DGEV5imxJZDucrMzQHPMLVYBsbqYvWcQ4fxbPaDhlhXtDDIS30bX0uq8tCmsuteHMM5DeCkNJADP/VujPSY+lNbfxbyZ2ew6+W3396KTckECcJEoN22p9LN+dod6CprLZHcjehyxvHSMarrVYchYxVUaMwDQwmM3Dz2Y8uc6ZNjsmM0jx5tzSkf42KEJAAxo6WLbHIC3WXpX7O9y9gMAU0C2FaUDNk0fBUSMsRbIsv9s4Jxl4AXs5N6KkJWVY7rNaf29153LRy/seL1XA4vkga/jkP5yItMgn6lmAMAKTw956J+WP+0Wx2Lflj/oDSczP9YTlNMcXHGheVk5xrF4YeU4CEl895GLY+G5BERrPEm0Gxe8uYPlguiNi9N5N37A3GXImFDHf/w4vMgTxIvgYogpSQR3zPG1p36WjntvYm3fRYd5LTWqGxOFJwq5OfZThLmbvBn5KRKMXHgXeinFfcqwxjTyU8IxUSDwRG+mxHn6shNUou2su5PoFtDT/gU/xq7htejanGN1k8K259gQj1TMAEChWuK5bR6a8Aqnqhg6+7Ttoj9hjjE7EwDYybeHZoL7W60Zbo/eTwKbZIztZey/exyzXwRLsqz9urZiHo53r14X3urKVNNuHA7h03UPlcUAQK6Ot7mPkhe7knFZWS0+lXYM/3ZXdbNq9Jp+SkSUEugfzw3rUPAGHFt+5hj+7S7MslogGEOCw+CW8c6o97Tz5uxC+RqYL7nyQHbnMpLW03FTT+3tW/1RtigWZHZ9uWJMQGbNSvZYBRlVXfYenyBcYF4R3YX8DB3T4i3/6Kw7SQvS7r96rzkOaS3ux1aiLfZewfPJSes9ovV0El6Lxo54i1VFTiU2XcwAQLfwuSufOHNx+JIVwulQc89aG9ayD7UoNAGAmiwis4uKzYg79gOiu1RuJVpbPbsgABCa27p6YEFhK7OIgVBr9mbEQEAZ4lkxEKZtv5EYiIhVsBIDkTTle2qpUjIpEKSuEiVBvLmoLeVmGIK8nVtkBLKumJ0lyGH+nSuQW2VFKSIjT8f03O2T89sl9uCvL+u9elAgSAD++7dGto5pyfCen2R3VI/Ll07qvXZQNEgAjhIlb9YhqPiIfLpoik+qk9AxQpD/7wUXL/LHhpUHrE5jBgCqzXA5oFYPpt6Yy0VWe6E+yxng7NIEAHBA2rZhAaVMOTULiJwGAUALCFtRS2CV6RsAe43xNhCy/zRA0DJQAyfG+4CszB3TdqxPx3jnd7SK4aOyknbcEMyIAHJmBgkA4IhP+HiRp34/RpwXf9p9ijQeN+9sJoJZEj8+FwZUhXYgky4YhmsuqjBb0lIbY4qSbU8ihKM9yLZIJFhcsscsD7J7vL7jD7O594DyiT+sEsxGCB3Wv1B6/VXeifOVXMtmwBY2O/F4jBs4uClZ+IRem24kbxL38eY+dODEHrfT5/17HQAgHQ8YG52fUA7J7Sy4w6f0OHaIjV4kyTzGkHipCbsY4yNGoRrseJxrHd1cxyN/jnEjRqXvGEM3+TCctjrGgVIdC67AwalQEKQXQZ4P7pSDZ+q/fNHZA2n5rPP4x7cB/cjP3HEDNKsgODUtHinnAIAx/Me1YI4p9mpAXpj0jOpfEE4bFLXNrgWzurnQPnaLBhfnGc7vlfiNLEsVgmWOD/yRf3/4690FmNn84un1rxEc2XDHH82fo6/lwf/WhP6Eyv/2kjxpYw8jcGN4A9Ty7duef514wvg/uTXr/cUvA/cf6Xblhu6DTk32Du+d4+2ek+Mjja2qtkAYByMhh94nWO/lNbjgS0REIgn/8RwxSmSs3VBt1a/hod24mkpBI0O7cX1MmZOsviPEkXbaTATTzlxYtDeeJvMlz9eQ0/YcpbuuTAyQ3cHFZd3NQKPy7k5b5fiA4TovKuYWy3i8Hjq+6H6Vf/vomBh3F0NTx46fzwD5OuUeTp2Hc24PxNPEZrj9EJ3G5XTTsZxeMx681t1EDx6vzC7re1p+IYfM4aN3+fsjFiqNdyz/S7Z3wMwOJGqb7DjsFsqVOhn/WNXp+JmMs/tlY2aGG6RZJSEB9meiAYBgyrd/cxA7eLRRyWc0r0drv9IHZDSne4YmADALkKpsAqW6hre30HlKyCKDUvOz/wAACgVSWPi5NshK7nYRyHd5cTogJ4W/TNNMXCSYRmUgMshUIz+Z3sPdi24M6komM5thYRKgypQy5sU1pDwutSCK+YxIEA/FbAmgrSs26A7Ec2mPFGSkaZh2mbwe73R+Jhb0xys1Q8MK/QjAj//WyLQwrQX+vUXqPNQ369S/kSZZWPEfAfg6lJssYTouITR7ncdIrxdR9HkSbmDMKgaSQrnnAIDUrEUZy8RZuAHGFfucJkkLgTqdnVvoYw4oOTQBAJrWZBMFE8DCNhfUZZAJLCjn/AcAemnxYv80AGL+pjTwxhQ3aW1o/UG0HFgGILBs+rkA',
                          'base64'
                        )
                      )
                      .toString()),
                  a
                )
              },
            ],
          ]),
          g = {
            hooks: {
              registerPackageExtensions: async (e, t) => {
                for (const [e, r] of o) t(A.parseDescriptor(e, !0), r)
              },
              getBuiltinPatch: async (e, t) => {
                var r
                if (!t.startsWith('compat/')) return
                const n = A.parseIdent(t.slice('compat/'.length)),
                  o =
                    null === (r = c.get(n.identHash)) || void 0 === r
                      ? void 0
                      : r()
                return void 0 !== o ? o : null
              },
              reduceDependency: async (e, t, r, n) =>
                void 0 === c.get(e.identHash)
                  ? e
                  : A.makeDescriptor(
                      e,
                      A.makeRange({
                        protocol: 'patch:',
                        source: A.stringifyDescriptor(e),
                        selector: `builtin<compat/${A.stringifyIdent(e)}>`,
                        params: null,
                      })
                    ),
            },
          }
      },
      10189: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => p })
        var A = r(36370),
          n = r(25413),
          o = r(54143),
          i = r(40822)
        class s extends n.BaseCommand {
          constructor() {
            super(...arguments), (this.quiet = !1), (this.args = [])
          }
          async execute() {
            const e = []
            this.pkg && e.push('--package', this.pkg),
              this.quiet && e.push('--quiet')
            const t = o.parseIdent(this.command),
              r = o.makeIdent(t.scope, 'create-' + t.name)
            return this.cli.run([
              'dlx',
              ...e,
              o.stringifyIdent(r),
              ...this.args,
            ])
          }
        }
        ;(0, A.gn)(
          [
            i.Command.String('-p,--package', {
              description: 'The package to run the provided command from',
            }),
          ],
          s.prototype,
          'pkg',
          void 0
        ),
          (0, A.gn)(
            [
              i.Command.Boolean('-q,--quiet', {
                description:
                  'Only report critical errors instead of printing the full install logs',
              }),
            ],
            s.prototype,
            'quiet',
            void 0
          ),
          (0, A.gn)([i.Command.String()], s.prototype, 'command', void 0),
          (0, A.gn)([i.Command.Proxy()], s.prototype, 'args', void 0),
          (0, A.gn)([i.Command.Path('create')], s.prototype, 'execute', null)
        var a = r(39922),
          c = r(85824),
          g = r(63088),
          l = r(43896),
          u = r(46009)
        class h extends n.BaseCommand {
          constructor() {
            super(...arguments), (this.quiet = !1), (this.args = [])
          }
          async execute() {
            return (
              (a.VK.telemetry = null),
              await l.xfs.mktempPromise(async e => {
                const t = u.y1.join(e, 'dlx-' + process.pid)
                await l.xfs.mkdirPromise(t),
                  await l.xfs.writeFilePromise(
                    u.y1.join(t, 'package.json'),
                    '{}\n'
                  ),
                  await l.xfs.writeFilePromise(u.y1.join(t, 'yarn.lock'), '')
                const r = u.y1.join(t, '.yarnrc.yml'),
                  A = await a.VK.findProjectCwd(
                    this.context.cwd,
                    u.QS.lockfile
                  ),
                  i = null !== A ? u.y1.join(A, '.yarnrc.yml') : null
                null !== i && l.xfs.existsSync(i)
                  ? (await l.xfs.copyFilePromise(i, r),
                    await a.VK.updateConfiguration(t, e => {
                      const t = {
                        ...e,
                        enableGlobalCache: !0,
                        enableTelemetry: !1,
                      }
                      return (
                        Array.isArray(e.plugins) &&
                          (t.plugins = e.plugins.map(e => {
                            const t = 'string' == typeof e ? e : e.path,
                              r = u.cS.isAbsolute(t)
                                ? t
                                : u.cS.resolve(u.cS.fromPortablePath(A), t)
                            return 'string' == typeof e
                              ? r
                              : { path: r, spec: e.spec }
                          })),
                        t
                      )
                    }))
                  : await l.xfs.writeFilePromise(
                      r,
                      'enableGlobalCache: true\nenableTelemetry: false\n'
                    )
                const s = void 0 !== this.pkg ? [this.pkg] : [this.command],
                  h = o.parseDescriptor(this.command).name,
                  p = await this.cli.run(['add', '--', ...s], {
                    cwd: t,
                    quiet: this.quiet,
                  })
                if (0 !== p) return p
                this.quiet || this.context.stdout.write('\n')
                const d = await a.VK.find(t, this.context.plugins),
                  { project: C, workspace: f } = await c.I.find(d, t)
                if (null === f) throw new n.WorkspaceRequiredError(C.cwd, t)
                return (
                  await C.restoreInstallState(),
                  await g.executeWorkspaceAccessibleBinary(f, h, this.args, {
                    cwd: this.context.cwd,
                    stdin: this.context.stdin,
                    stdout: this.context.stdout,
                    stderr: this.context.stderr,
                  })
                )
              })
            )
          }
        }
        ;(h.usage = i.Command.Usage({
          description: 'run a package in a temporary environment',
          details:
            "\n      This command will install a package within a temporary environment, and run its binary script if it contains any. The binary will run within the current cwd.\n\n      By default Yarn will download the package named `command`, but this can be changed through the use of the `-p,--package` flag which will instruct Yarn to still run the same command but from a different package.\n\n      Using `yarn dlx` as a replacement of `yarn add` isn't recommended, as it makes your project non-deterministic (Yarn doesn't keep track of the packages installed through `dlx` - neither their name, nor their version).\n    ",
          examples: [
            [
              'Use create-react-app to create a new React app',
              'yarn dlx create-react-app ./my-app',
            ],
          ],
        })),
          (0, A.gn)(
            [
              i.Command.String('-p,--package', {
                description: 'The package to run the provided command from',
              }),
            ],
            h.prototype,
            'pkg',
            void 0
          ),
          (0, A.gn)(
            [
              i.Command.Boolean('-q,--quiet', {
                description:
                  'Only report critical errors instead of printing the full install logs',
              }),
            ],
            h.prototype,
            'quiet',
            void 0
          ),
          (0, A.gn)([i.Command.String()], h.prototype, 'command', void 0),
          (0, A.gn)([i.Command.Proxy()], h.prototype, 'args', void 0),
          (0, A.gn)([i.Command.Path('dlx')], h.prototype, 'execute', null)
        const p = { commands: [s, h] }
      },
      34777: (e, t, r) => {
        'use strict'
        r.r(t),
          r.d(t, {
            dedupeUtils: () => A,
            default: () => We,
            suggestUtils: () => A,
          })
        var A = {}
        r.r(A),
          r.d(A, {
            Modifier: () => o,
            Strategy: () => i,
            Target: () => n,
            applyModifier: () => S,
            extractDescriptorFromPath: () => N,
            extractRangeModifier: () => v,
            fetchDescriptorFrom: () => K,
            findProjectDescriptors: () => k,
            getModifier: () => D,
            getSuggestedDescriptors: () => F,
          })
        var n,
          o,
          i,
          s = r(39922),
          a = r(36370),
          c = r(25413),
          g = r(28148),
          l = r(62152),
          u = r(92659),
          h = r(85824),
          p = r(15815),
          d = r(54143),
          C = r(40822),
          f = r(61899),
          I = r(33720),
          E = r(46611),
          B = r(71643),
          y = r(43896),
          m = r(46009),
          w = r(53887),
          Q = r.n(w)
        function D(e, t) {
          return e.exact
            ? o.EXACT
            : e.caret
            ? o.CARET
            : e.tilde
            ? o.TILDE
            : t.configuration.get('defaultSemverRangePrefix')
        }
        !(function (e) {
          ;(e.REGULAR = 'dependencies'),
            (e.DEVELOPMENT = 'devDependencies'),
            (e.PEER = 'peerDependencies')
        })(n || (n = {})),
          (function (e) {
            ;(e.CARET = '^'), (e.TILDE = '~'), (e.EXACT = '')
          })(o || (o = {})),
          (function (e) {
            ;(e.KEEP = 'keep'),
              (e.REUSE = 'reuse'),
              (e.PROJECT = 'project'),
              (e.LATEST = 'latest'),
              (e.CACHE = 'cache')
          })(i || (i = {}))
        const b = /^([\^~]?)[0-9]+(?:\.[0-9]+){0,2}(?:-\S+)?$/
        function v(e, { project: t }) {
          const r = e.match(b)
          return r ? r[1] : t.configuration.get('defaultSemverRangePrefix')
        }
        function S(e, t) {
          let { protocol: r, source: A, params: n, selector: o } = d.parseRange(
            e.range
          )
          return (
            Q().valid(o) && (o = `${t}${e.range}`),
            d.makeDescriptor(
              e,
              d.makeRange({ protocol: r, source: A, params: n, selector: o })
            )
          )
        }
        async function k(e, { project: t, target: r }) {
          const A = new Map(),
            o = e => {
              let t = A.get(e.descriptorHash)
              return (
                t ||
                  A.set(
                    e.descriptorHash,
                    (t = { descriptor: e, locators: [] })
                  ),
                t
              )
            }
          for (const A of t.workspaces)
            if (r === n.PEER) {
              const t = A.manifest.peerDependencies.get(e.identHash)
              void 0 !== t && o(t).locators.push(A.locator)
            } else {
              const t = A.manifest.dependencies.get(e.identHash),
                i = A.manifest.devDependencies.get(e.identHash)
              r === n.DEVELOPMENT
                ? void 0 !== i
                  ? o(i).locators.push(A.locator)
                  : void 0 !== t && o(t).locators.push(A.locator)
                : void 0 !== t
                ? o(t).locators.push(A.locator)
                : void 0 !== i && o(i).locators.push(A.locator)
            }
          return A
        }
        async function N(e, { cwd: t, workspace: r }) {
          return await (async function (e) {
            return await y.xfs.mktempPromise(async t => {
              const r = s.VK.create(t)
              return (
                r.useWithSource(
                  t,
                  { enableMirror: !1, compressionLevel: 0 },
                  t,
                  { overwrite: !0 }
                ),
                await e(
                  new g.C(t, { configuration: r, check: !1, immutable: !1 })
                )
              )
            })
          })(async A => {
            m.y1.isAbsolute(e) ||
              (e = m.y1.relative(r.cwd, m.y1.resolve(t, e))).match(
                /^\.{0,2}\//
              ) ||
              (e = './' + e)
            const { project: n } = r,
              o = await K(d.makeIdent(null, 'archive'), e, {
                project: r.project,
                cache: A,
                workspace: r,
              })
            if (!o)
              throw new Error(
                'Assertion failed: The descriptor should have been found'
              )
            const i = new I.$(),
              s = n.configuration.makeResolver(),
              a = n.configuration.makeFetcher(),
              c = {
                checksums: n.storedChecksums,
                project: n,
                cache: A,
                fetcher: a,
                report: i,
                resolver: s,
              },
              g = s.bindDescriptor(o, r.anchoredLocator, c),
              l = d.convertDescriptorToLocator(g),
              u = await a.fetch(l, c),
              h = await E.G.find(u.prefixPath, { baseFs: u.packageFs })
            if (!h.name) throw new Error("Target path doesn't have a name")
            return d.makeDescriptor(h.name, e)
          })
        }
        async function F(
          e,
          {
            project: t,
            workspace: r,
            cache: A,
            target: o,
            modifier: s,
            strategies: a,
            maxResults: c = 1 / 0,
          }
        ) {
          if (!(c >= 0)) throw new Error(`Invalid maxResults (${c})`)
          if ('unknown' !== e.range)
            return {
              suggestions: [
                {
                  descriptor: e,
                  name: 'Use ' + d.prettyDescriptor(t.configuration, e),
                  reason: '(unambiguous explicit request)',
                },
              ],
              rejections: [],
            }
          const g = (null != r && r.manifest[o].get(e.identHash)) || null,
            l = [],
            u = [],
            h = async e => {
              try {
                await e()
              } catch (e) {
                u.push(e)
              }
            }
          for (const u of a) {
            if (l.length >= c) break
            switch (u) {
              case i.KEEP:
                await h(async () => {
                  g &&
                    l.push({
                      descriptor: g,
                      name: 'Keep ' + d.prettyDescriptor(t.configuration, g),
                      reason: '(no changes)',
                    })
                })
                break
              case i.REUSE:
                await h(async () => {
                  for (const { descriptor: A, locators: n } of (
                    await k(e, { project: t, target: o })
                  ).values()) {
                    if (
                      1 === n.length &&
                      n[0].locatorHash === r.anchoredLocator.locatorHash &&
                      a.includes(i.KEEP)
                    )
                      continue
                    let e =
                      '(originally used by ' +
                      d.prettyLocator(t.configuration, n[0])
                    ;(e +=
                      n.length > 1
                        ? ` and ${n.length - 1} other${
                            n.length > 2 ? 's' : ''
                          })`
                        : ')'),
                      l.push({
                        descriptor: A,
                        name: 'Reuse ' + d.prettyDescriptor(t.configuration, A),
                        reason: e,
                      })
                  }
                })
                break
              case i.CACHE:
                await h(async () => {
                  for (const r of t.storedDescriptors.values())
                    r.identHash === e.identHash &&
                      l.push({
                        descriptor: r,
                        name: 'Reuse ' + d.prettyDescriptor(t.configuration, r),
                        reason: '(already used somewhere in the lockfile)',
                      })
                })
                break
              case i.PROJECT:
                await h(async () => {
                  if (
                    null !== r.manifest.name &&
                    e.identHash === r.manifest.name.identHash
                  )
                    return
                  const A = t.tryWorkspaceByIdent(e)
                  null !== A &&
                    l.push({
                      descriptor: A.anchoredDescriptor,
                      name: 'Attach ' + d.prettyWorkspace(t.configuration, A),
                      reason: `(local workspace at ${A.cwd})`,
                    })
                })
                break
              case i.LATEST:
                await h(async () => {
                  if ('unknown' !== e.range)
                    l.push({
                      descriptor: e,
                      name: 'Use ' + d.prettyRange(t.configuration, e.range),
                      reason: '(explicit range requested)',
                    })
                  else if (o === n.PEER)
                    l.push({
                      descriptor: d.makeDescriptor(e, '*'),
                      name: 'Use *',
                      reason: '(catch-all peer dependency pattern)',
                    })
                  else if (t.configuration.get('enableNetwork')) {
                    let n = await K(e, 'latest', {
                      project: t,
                      cache: A,
                      workspace: r,
                      preserveModifier: !1,
                    })
                    n &&
                      ((n = S(n, s)),
                      l.push({
                        descriptor: n,
                        name: 'Use ' + d.prettyDescriptor(t.configuration, n),
                        reason: '(resolved from latest)',
                      }))
                  } else
                    l.push({
                      descriptor: null,
                      name: 'Resolve from latest',
                      reason: B.pretty(
                        t.configuration,
                        '(unavailable because enableNetwork is toggled off)',
                        'grey'
                      ),
                    })
                })
            }
          }
          return { suggestions: l.slice(0, c), rejections: u.slice(0, c) }
        }
        async function K(
          e,
          t,
          { project: r, cache: A, workspace: n, preserveModifier: o = !0 }
        ) {
          const i = d.makeDescriptor(e, t),
            s = new I.$(),
            a = r.configuration.makeFetcher(),
            c = r.configuration.makeResolver(),
            g = {
              project: r,
              fetcher: a,
              cache: A,
              checksums: r.storedChecksums,
              report: s,
              skipIntegrityCheck: !0,
            },
            l = { ...g, resolver: c, fetchOptions: g },
            u = c.bindDescriptor(i, n.anchoredLocator, l),
            h = await c.getCandidates(u, new Map(), l)
          if (0 === h.length) return null
          const p = h[0]
          let { protocol: C, source: f, params: E, selector: B } = d.parseRange(
            d.convertToManifestRange(p.reference)
          )
          if (
            (C === r.configuration.get('defaultProtocol') && (C = null),
            Q().valid(B) && !1 !== o)
          ) {
            B = v('string' == typeof o ? o : i.range, { project: r }) + B
          }
          return d.makeDescriptor(
            p,
            d.makeRange({ protocol: C, source: f, params: E, selector: B })
          )
        }
        class M extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.packages = []),
              (this.json = !1),
              (this.exact = !1),
              (this.tilde = !1),
              (this.caret = !1),
              (this.dev = !1),
              (this.peer = !1),
              (this.optional = !1),
              (this.preferDev = !1),
              (this.interactive = null),
              (this.cached = !1)
          }
          async execute() {
            var e
            const t = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: r, workspace: A } = await h.I.find(
                t,
                this.context.cwd
              ),
              o = await g.C.find(t)
            if (!A) throw new c.WorkspaceRequiredError(r.cwd, this.context.cwd)
            await r.restoreInstallState({ restoreResolutions: !1 })
            const a =
                null !== (e = this.interactive) && void 0 !== e
                  ? e
                  : t.get('preferInteractive'),
              I = D(this, r),
              E = [
                ...(a ? [i.REUSE] : []),
                i.PROJECT,
                ...(this.cached ? [i.CACHE] : []),
                i.LATEST,
              ],
              B = a ? 1 / 0 : 1,
              y = await Promise.all(
                this.packages.map(async e => {
                  const t = e.match(/^\.{0,2}\//)
                      ? await N(e, { cwd: this.context.cwd, workspace: A })
                      : d.parseDescriptor(e),
                    i = (function (
                      e,
                      t,
                      { dev: r, peer: A, preferDev: o, optional: i }
                    ) {
                      const s = e.manifest[n.REGULAR].has(t.identHash),
                        a = e.manifest[n.DEVELOPMENT].has(t.identHash),
                        c = e.manifest[n.PEER].has(t.identHash)
                      if ((r || A) && s)
                        throw new C.UsageError(
                          `Package "${d.prettyIdent(
                            e.project.configuration,
                            t
                          )}" is already listed as a regular dependency - remove the -D,-P flags or remove it from your dependencies first`
                        )
                      if (!r && !A && c)
                        throw new C.UsageError(
                          `Package "${d.prettyIdent(
                            e.project.configuration,
                            t
                          )}" is already listed as a peer dependency - use either of -D or -P, or remove it from your peer dependencies first`
                        )
                      if (i && a)
                        throw new C.UsageError(
                          `Package "${d.prettyIdent(
                            e.project.configuration,
                            t
                          )}" is already listed as a dev dependency - remove the -O flag or remove it from your dev dependencies first`
                        )
                      if (i && !A && c)
                        throw new C.UsageError(
                          `Package "${d.prettyIdent(
                            e.project.configuration,
                            t
                          )}" is already listed as a peer dependency - remove the -O flag or add the -P flag or remove it from your peer dependencies first`
                        )
                      if ((r || o) && i)
                        throw new C.UsageError(
                          `Package "${d.prettyIdent(
                            e.project.configuration,
                            t
                          )}" cannot simultaneously be a dev dependency and an optional dependency`
                        )
                      return A
                        ? n.PEER
                        : r || o
                        ? n.DEVELOPMENT
                        : s
                        ? n.REGULAR
                        : a
                        ? n.DEVELOPMENT
                        : n.REGULAR
                    })(A, t, {
                      dev: this.dev,
                      peer: this.peer,
                      preferDev: this.preferDev,
                      optional: this.optional,
                    })
                  return [
                    t,
                    await F(t, {
                      project: r,
                      workspace: A,
                      cache: o,
                      target: i,
                      modifier: I,
                      strategies: E,
                      maxResults: B,
                    }),
                    i,
                  ]
                })
              ),
              m = await l.h.start(
                {
                  configuration: t,
                  stdout: this.context.stdout,
                  suggestInstall: !1,
                },
                async e => {
                  for (const [A, { suggestions: n, rejections: o }] of y) {
                    if (0 === n.filter(e => null !== e.descriptor).length) {
                      const [n] = o
                      if (void 0 === n)
                        throw new Error(
                          'Assertion failed: Expected an error to have been set'
                        )
                      const i = this.cli.error(n)
                      r.configuration.get('enableNetwork')
                        ? e.reportError(
                            u.b.CANT_SUGGEST_RESOLUTIONS,
                            `${d.prettyDescriptor(
                              t,
                              A
                            )} can't be resolved to a satisfying range:\n\n${i}`
                          )
                        : e.reportError(
                            u.b.CANT_SUGGEST_RESOLUTIONS,
                            `${d.prettyDescriptor(
                              t,
                              A
                            )} can't be resolved to a satisfying range (note: network resolution has been disabled):\n\n${i}`
                          )
                    }
                  }
                }
              )
            if (m.hasErrors()) return m.exitCode()
            let w = !1
            const Q = [],
              b = []
            for (const [, { suggestions: e }, t] of y) {
              let r
              const n = e.filter(e => null !== e.descriptor),
                o = n[0].descriptor,
                i = n.every(e => d.areDescriptorsEqual(e.descriptor, o))
              1 === n.length || i
                ? (r = o)
                : ((w = !0),
                  ({ answer: r } = await (0, f.prompt)({
                    type: 'select',
                    name: 'answer',
                    message: 'Which range do you want to use?',
                    choices: e.map(({ descriptor: e, name: t, reason: r }) =>
                      e
                        ? { name: t, hint: r, descriptor: e }
                        : { name: t, hint: r, disabled: !0 }
                    ),
                    onCancel: () => process.exit(130),
                    result(e) {
                      return this.find(e, 'descriptor')
                    },
                    stdin: this.context.stdin,
                    stdout: this.context.stdout,
                  })))
              const s = A.manifest[t].get(r.identHash)
              ;(void 0 !== s && s.descriptorHash === r.descriptorHash) ||
                (A.manifest[t].set(r.identHash, r),
                this.optional &&
                  ('dependencies' === t
                    ? (A.manifest.ensureDependencyMeta({
                        ...r,
                        range: 'unknown',
                      }).optional = !0)
                    : 'peerDependencies' === t &&
                      (A.manifest.ensurePeerDependencyMeta({
                        ...r,
                        range: 'unknown',
                      }).optional = !0)),
                void 0 === s ? Q.push([A, t, r, E]) : b.push([A, t, s, r]))
            }
            await t.triggerMultipleHooks(
              e => e.afterWorkspaceDependencyAddition,
              Q
            ),
              await t.triggerMultipleHooks(
                e => e.afterWorkspaceDependencyReplacement,
                b
              ),
              w && this.context.stdout.write('\n')
            return (
              await p.Pk.start(
                {
                  configuration: t,
                  json: this.json,
                  stdout: this.context.stdout,
                  includeLogs: !this.context.quiet,
                },
                async e => {
                  await r.install({ cache: o, report: e })
                }
              )
            ).exitCode()
          }
        }
        ;(M.usage = C.Command.Usage({
          description: 'add dependencies to the project',
          details:
            "\n      This command adds a package to the package.json for the nearest workspace.\n\n      - If it didn't exist before, the package will by default be added to the regular `dependencies` field, but this behavior can be overriden thanks to the `-D,--dev` flag (which will cause the dependency to be added to the `devDependencies` field instead) and the `-P,--peer` flag (which will do the same but for `peerDependencies`).\n\n      - If the package was already listed in your dependencies, it will by default be upgraded whether it's part of your `dependencies` or `devDependencies` (it won't ever update `peerDependencies`, though).\n\n      - If set, the `--prefer-dev` flag will operate as a more flexible `-D,--dev` in that it will add the package to your `devDependencies` if it isn't already listed in either `dependencies` or `devDependencies`, but it will also happily upgrade your `dependencies` if that's what you already use (whereas `-D,--dev` would throw an exception).\n\n      - If set, the `-O,--optional` flag will add the package to the `optionalDependencies` field and, in combination with the `-P,--peer` flag, it will add the package as an optional peer dependency. If the package was already listed in your `dependencies`, it will be upgraded to `optionalDependencies`. If the package was already listed in your `peerDependencies`, in combination with the `-P,--peer` flag, it will be upgraded to an optional peer dependency: `\"peerDependenciesMeta\": { \"<package>\": { \"optional\": true } }`\n\n      - If the added package doesn't specify a range at all its `latest` tag will be resolved and the returned version will be used to generate a new semver range (using the `^` modifier by default unless otherwise configured via the `defaultSemverRangePrefix` configuration, or the `~` modifier if `-T,--tilde` is specified, or no modifier at all if `-E,--exact` is specified). Two exceptions to this rule: the first one is that if the package is a workspace then its local version will be used, and the second one is that if you use `-P,--peer` the default range will be `*` and won't be resolved at all.\n\n      - If the added package specifies a range (such as `^1.0.0`, `latest`, or `rc`), Yarn will add this range as-is in the resulting package.json entry (in particular, tags such as `rc` will be encoded as-is rather than being converted into a semver range).\n\n      If the `--cached` option is used, Yarn will preferably reuse the highest version already used somewhere within the project, even if through a transitive dependency.\n\n      If the `-i,--interactive` option is used (or if the `preferInteractive` settings is toggled on) the command will first try to check whether other workspaces in the project use the specified package and, if so, will offer to reuse them.\n\n      For a compilation of all the supported protocols, please consult the dedicated page from our website: https://yarnpkg.com/features/protocols.\n    ",
          examples: [
            ['Add a regular package to the current workspace', '$0 add lodash'],
            [
              'Add a specific version for a package to the current workspace',
              '$0 add lodash@1.2.3',
            ],
            [
              'Add a package from a GitHub repository (the master branch) to the current workspace using a URL',
              '$0 add lodash@https://github.com/lodash/lodash',
            ],
            [
              'Add a package from a GitHub repository (the master branch) to the current workspace using the GitHub protocol',
              '$0 add lodash@github:lodash/lodash',
            ],
            [
              'Add a package from a GitHub repository (the master branch) to the current workspace using the GitHub protocol (shorthand)',
              '$0 add lodash@lodash/lodash',
            ],
            [
              'Add a package from a specific branch of a GitHub repository to the current workspace using the GitHub protocol (shorthand)',
              '$0 add lodash-es@lodash/lodash#es',
            ],
          ],
        })),
          (0, a.gn)([C.Command.Rest()], M.prototype, 'packages', void 0),
          (0, a.gn)(
            [
              C.Command.Boolean('--json', {
                description: 'Format the output as an NDJSON stream',
              }),
            ],
            M.prototype,
            'json',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('-E,--exact', {
                description:
                  "Don't use any semver modifier on the resolved range",
              }),
            ],
            M.prototype,
            'exact',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('-T,--tilde', {
                description:
                  'Use the `~` semver modifier on the resolved range',
              }),
            ],
            M.prototype,
            'tilde',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('-C,--caret', {
                description:
                  'Use the `^` semver modifier on the resolved range',
              }),
            ],
            M.prototype,
            'caret',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('-D,--dev', {
                description: 'Add a package as a dev dependency',
              }),
            ],
            M.prototype,
            'dev',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('-P,--peer', {
                description: 'Add a package as a peer dependency',
              }),
            ],
            M.prototype,
            'peer',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('-O,--optional', {
                description:
                  'Add / upgrade a package to an optional regular / peer dependency',
              }),
            ],
            M.prototype,
            'optional',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--prefer-dev', {
                description: 'Add / upgrade a package to a dev dependency',
              }),
            ],
            M.prototype,
            'preferDev',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('-i,--interactive', {
                description:
                  'Reuse the specified package from other workspaces in the project',
              }),
            ],
            M.prototype,
            'interactive',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--cached', {
                description:
                  'Reuse the highest version already used somewhere within the project',
              }),
            ],
            M.prototype,
            'cached',
            void 0
          ),
          (0, a.gn)([C.Command.Path('add')], M.prototype, 'execute', null)
        var R = r(63088)
        class x extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.verbose = !1), (this.json = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, locator: r } = await h.I.find(e, this.context.cwd)
            if ((await t.restoreInstallState(), this.name)) {
              const A = (
                await R.getPackageAccessibleBinaries(r, { project: t })
              ).get(this.name)
              if (!A)
                throw new C.UsageError(
                  `Couldn't find a binary named "${
                    this.name
                  }" for package "${d.prettyLocator(e, r)}"`
                )
              const [, n] = A
              return this.context.stdout.write(n + '\n'), 0
            }
            return (
              await p.Pk.start(
                {
                  configuration: e,
                  json: this.json,
                  stdout: this.context.stdout,
                },
                async A => {
                  const n = await R.getPackageAccessibleBinaries(r, {
                      project: t,
                    }),
                    o = Array.from(n.keys()).reduce(
                      (e, t) => Math.max(e, t.length),
                      0
                    )
                  for (const [e, [t, r]] of n)
                    A.reportJson({
                      name: e,
                      source: d.stringifyIdent(t),
                      path: r,
                    })
                  if (this.verbose)
                    for (const [t, [r]] of n)
                      A.reportInfo(
                        null,
                        `${t.padEnd(o, ' ')}   ${d.prettyLocator(e, r)}`
                      )
                  else for (const e of n.keys()) A.reportInfo(null, e)
                }
              )
            ).exitCode()
          }
        }
        ;(x.usage = C.Command.Usage({
          description: 'get the path to a binary script',
          details:
            '\n      When used without arguments, this command will print the list of all the binaries available in the current workspace. Adding the `-v,--verbose` flag will cause the output to contain both the binary name and the locator of the package that provides the binary.\n\n      When an argument is specified, this command will just print the path to the binary on the standard output and exit. Note that the reported path may be stored within a zip archive.\n    ',
          examples: [
            ['List all the available binaries', '$0 bin'],
            ['Print the path to a specific binary', '$0 bin eslint'],
          ],
        })),
          (0, a.gn)(
            [C.Command.String({ required: !1 })],
            x.prototype,
            'name',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('-v,--verbose', {
                description:
                  'Print both the binary name and the locator of the package that provides the binary',
              }),
            ],
            x.prototype,
            'verbose',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--json', {
                description: 'Format the output as an NDJSON stream',
              }),
            ],
            x.prototype,
            'json',
            void 0
          ),
          (0, a.gn)([C.Command.Path('bin')], x.prototype, 'execute', null)
        class L extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.mirror = !1), (this.all = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              t = await g.C.find(e)
            return (
              await p.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async () => {
                  const e = (this.all || this.mirror) && null !== t.mirrorCwd,
                    r = !this.mirror
                  e && (await y.xfs.removePromise(t.mirrorCwd)),
                    r && (await y.xfs.removePromise(t.cwd))
                }
              )
            ).exitCode()
          }
        }
        ;(L.usage = C.Command.Usage({
          description: 'remove the shared cache files',
          details:
            '\n      This command will remove all the files from the cache.\n    ',
          examples: [
            ['Remove all the local archives', '$0 cache clean'],
            [
              'Remove all the archives stored in the ~/.yarn directory',
              '$0 cache clean --mirror',
            ],
          ],
        })),
          (0, a.gn)(
            [
              C.Command.Boolean('--mirror', {
                description:
                  'Remove the global cache files instead of the local cache files',
              }),
            ],
            L.prototype,
            'mirror',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--all', {
                description:
                  'Remove both the global cache files and the local cache files of the current project',
              }),
            ],
            L.prototype,
            'all',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path('cache', 'clean')],
            L.prototype,
            'execute',
            null
          )
        var P = r(73632),
          O = r(44674),
          U = r.n(O),
          T = r(31669)
        class j extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.json = !1), (this.unsafe = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              t = this.name.replace(/[.[].*$/, ''),
              r = this.name.replace(/^[^.[]*/, '')
            if (void 0 === e.settings.get(t))
              throw new C.UsageError(
                `Couldn't find a configuration settings named "${t}"`
              )
            const A = e.getSpecial(t, {
                hideSecrets: !this.unsafe,
                getNativePaths: !0,
              }),
              n = P.convertMapsToIndexableObjects(A),
              o = r ? U()(n, r) : n,
              i = await p.Pk.start(
                {
                  configuration: e,
                  includeFooter: !1,
                  json: this.json,
                  stdout: this.context.stdout,
                },
                async e => {
                  e.reportJson(o)
                }
              )
            if (!this.json) {
              if ('string' == typeof o)
                return this.context.stdout.write(o + '\n'), i.exitCode()
              ;(T.inspect.styles.name = 'cyan'),
                this.context.stdout.write(
                  (0, T.inspect)(o, {
                    depth: 1 / 0,
                    colors: e.get('enableColors'),
                    compact: !1,
                  }) + '\n'
                )
            }
            return i.exitCode()
          }
        }
        ;(j.usage = C.Command.Usage({
          description: 'read a configuration settings',
          details:
            "\n      This command will print a configuration setting.\n\n      Secrets (such as tokens) will be redacted from the output by default. If this behavior isn't desired, set the `--no-redacted` to get the untransformed value.\n    ",
          examples: [
            [
              'Print a simple configuration setting',
              'yarn config get yarnPath',
            ],
            [
              'Print a complex configuration setting',
              'yarn config get packageExtensions',
            ],
            [
              'Print a nested field from the configuration',
              'yarn config get \'npmScopes["my-company"].npmRegistryServer\'',
            ],
            [
              'Print a token from the configuration',
              'yarn config get npmAuthToken --no-redacted',
            ],
            [
              'Print a configuration setting as JSON',
              'yarn config get packageExtensions --json',
            ],
          ],
        })),
          (0, a.gn)([C.Command.String()], j.prototype, 'name', void 0),
          (0, a.gn)(
            [
              C.Command.Boolean('--json', {
                description: 'Format the output as an NDJSON stream',
              }),
            ],
            j.prototype,
            'json',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--no-redacted', {
                description:
                  "Don't redact secrets (such as tokens) from the output",
              }),
            ],
            j.prototype,
            'unsafe',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path('config', 'get')],
            j.prototype,
            'execute',
            null
          )
        var Y = r(82558),
          G = r.n(Y),
          H = r(81534),
          J = r.n(H)
        class q extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.json = !1), (this.home = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins)
            if (!e.projectCwd)
              throw new C.UsageError(
                'This command must be run from within a project folder'
              )
            const t = this.name.replace(/[.[].*$/, ''),
              r = this.name.replace(/^[^.[]*\.?/, '')
            if (void 0 === e.settings.get(t))
              throw new C.UsageError(
                `Couldn't find a configuration settings named "${t}"`
              )
            const A = this.json ? JSON.parse(this.value) : this.value,
              n = this.home
                ? e => s.VK.updateHomeConfiguration(e)
                : t => s.VK.updateConfiguration(e.projectCwd, t)
            await n(e => {
              if (r) {
                const t = G()(e)
                return J()(t, this.name, A), t
              }
              return { ...e, [t]: A }
            })
            const o = (
                await s.VK.find(this.context.cwd, this.context.plugins)
              ).getSpecial(t, { hideSecrets: !0, getNativePaths: !0 }),
              i = P.convertMapsToIndexableObjects(o),
              a = r ? U()(i, r) : i
            return (
              await p.Pk.start(
                {
                  configuration: e,
                  includeFooter: !1,
                  stdout: this.context.stdout,
                },
                async t => {
                  ;(T.inspect.styles.name = 'cyan'),
                    t.reportInfo(
                      u.b.UNNAMED,
                      `Successfully set ${this.name} to ${(0, T.inspect)(a, {
                        depth: 1 / 0,
                        colors: e.get('enableColors'),
                        compact: !1,
                      })}`
                    )
                }
              )
            ).exitCode()
          }
        }
        ;(q.usage = C.Command.Usage({
          description: 'change a configuration settings',
          details:
            '\n      This command will set a configuration setting.\n\n      When used without the `--json` flag, it can only set a simple configuration setting (a string, a number, or a boolean).\n\n      When used with the `--json` flag, it can set both simple and complex configuration settings, including Arrays and Objects.\n    ',
          examples: [
            [
              'Set a simple configuration setting (a string, a number, or a boolean)',
              'yarn config set initScope myScope',
            ],
            [
              'Set a simple configuration setting (a string, a number, or a boolean) using the `--json` flag',
              'yarn config set initScope --json \\"myScope\\"',
            ],
            [
              'Set a complex configuration setting (an Array) using the `--json` flag',
              'yarn config set unsafeHttpWhitelist --json \'["*.example.com", "example.com"]\'',
            ],
            [
              'Set a complex configuration setting (an Object) using the `--json` flag',
              'yarn config set packageExtensions --json \'{ "@babel/parser@*": { "dependencies": { "@babel/types": "*" } } }\'',
            ],
            [
              'Set a nested configuration setting',
              'yarn config set npmScopes.company.npmRegistryServer "https://npm.example.com"',
            ],
            [
              'Set a nested configuration setting using indexed access for non-simple keys',
              'yarn config set \'npmRegistries["//npm.example.com"].npmAuthToken\' "ffffffff-ffff-ffff-ffff-ffffffffffff"',
            ],
          ],
        })),
          (0, a.gn)([C.Command.String()], q.prototype, 'name', void 0),
          (0, a.gn)([C.Command.String()], q.prototype, 'value', void 0),
          (0, a.gn)(
            [
              C.Command.Boolean('--json', {
                description:
                  'Set complex configuration settings to JSON values',
              }),
            ],
            q.prototype,
            'json',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('-H,--home', {
                description:
                  'Update the home configuration instead of the project configuration',
              }),
            ],
            q.prototype,
            'home',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path('config', 'set')],
            q.prototype,
            'execute',
            null
          )
        class z extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.verbose = !1),
              (this.why = !1),
              (this.json = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins, {
              strict: !1,
            })
            return (
              await p.Pk.start(
                {
                  configuration: e,
                  json: this.json,
                  stdout: this.context.stdout,
                },
                async t => {
                  if (e.invalid.size > 0 && !this.json) {
                    for (const [r, A] of e.invalid)
                      t.reportError(
                        u.b.INVALID_CONFIGURATION_KEY,
                        `Invalid configuration key "${r}" in ${A}`
                      )
                    t.reportSeparator()
                  }
                  if (this.json) {
                    const r = P.sortMap(e.settings.keys(), e => e)
                    for (const A of r) {
                      const r = e.settings.get(A),
                        n = e.getSpecial(A, {
                          hideSecrets: !0,
                          getNativePaths: !0,
                        }),
                        o = e.sources.get(A)
                      this.verbose
                        ? t.reportJson({ key: A, effective: n, source: o })
                        : t.reportJson({
                            key: A,
                            effective: n,
                            source: o,
                            ...r,
                          })
                    }
                  } else {
                    const r = P.sortMap(e.settings.keys(), e => e),
                      A = r.reduce((e, t) => Math.max(e, t.length), 0),
                      n = {
                        breakLength: 1 / 0,
                        colors: e.get('enableColors'),
                        maxArrayLength: 2,
                      }
                    if (this.why || this.verbose) {
                      const o = r.map(t => {
                          const r = e.settings.get(t)
                          if (!r)
                            throw new Error(
                              `Assertion failed: This settings ("${t}") should have been registered`
                            )
                          return [
                            t,
                            this.why
                              ? e.sources.get(t) || '<default>'
                              : r.description,
                          ]
                        }),
                        i = o.reduce((e, [, t]) => Math.max(e, t.length), 0)
                      for (const [r, s] of o)
                        t.reportInfo(
                          null,
                          `${r.padEnd(A, ' ')}   ${s.padEnd(i, ' ')}   ${(0,
                          T.inspect)(
                            e.getSpecial(r, {
                              hideSecrets: !0,
                              getNativePaths: !0,
                            }),
                            n
                          )}`
                        )
                    } else
                      for (const o of r)
                        t.reportInfo(
                          null,
                          `${o.padEnd(A, ' ')}   ${(0, T.inspect)(
                            e.getSpecial(o, {
                              hideSecrets: !0,
                              getNativePaths: !0,
                            }),
                            n
                          )}`
                        )
                  }
                }
              )
            ).exitCode()
          }
        }
        ;(z.usage = C.Command.Usage({
          description: 'display the current configuration',
          details:
            '\n      This command prints the current active configuration settings.\n    ',
          examples: [['Print the active configuration settings', '$0 config']],
        })),
          (0, a.gn)(
            [
              C.Command.Boolean('-v,--verbose', {
                description:
                  'Print the setting description on top of the regular key/value information',
              }),
            ],
            z.prototype,
            'verbose',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--why', {
                description:
                  'Print the reason why a setting is set a particular way',
              }),
            ],
            z.prototype,
            'why',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--json', {
                description: 'Format the output as an NDJSON stream',
              }),
            ],
            z.prototype,
            'json',
            void 0
          ),
          (0, a.gn)([C.Command.Path('config')], z.prototype, 'execute', null)
        var W,
          V = r(15966),
          X = r(35691),
          _ = r(2401),
          Z = r.n(_)
        !(function (e) {
          e.HIGHEST = 'highest'
        })(W || (W = {}))
        const $ = new Set(Object.values(W)),
          ee = {
            highest: async (
              e,
              t,
              { resolver: r, fetcher: A, resolveOptions: n, fetchOptions: o }
            ) => {
              const i = new Map()
              for (const [t, r] of e.storedResolutions) {
                const A = e.storedDescriptors.get(t)
                if (void 0 === A)
                  throw new Error(
                    `Assertion failed: The descriptor (${t}) should have been registered`
                  )
                P.getSetWithDefault(i, A.identHash).add(r)
              }
              return Array.from(e.storedDescriptors.values(), async A => {
                if (t.length && !Z().isMatch(d.stringifyIdent(A), t))
                  return null
                const o = e.storedResolutions.get(A.descriptorHash)
                if (void 0 === o)
                  throw new Error(
                    `Assertion failed: The resolution (${A.descriptorHash}) should have been registered`
                  )
                const s = e.originalPackages.get(o)
                if (void 0 === s) return null
                if (!r.shouldPersistResolution(s, n)) return null
                const a = i.get(A.identHash)
                if (void 0 === a)
                  throw new Error(
                    `Assertion failed: The resolutions (${A.identHash}) should have been registered`
                  )
                if (1 === a.size) return null
                const c = [...a].map(t => {
                    const r = e.originalPackages.get(t)
                    if (void 0 === r)
                      throw new Error(
                        `Assertion failed: The package (${t}) should have been registered`
                      )
                    return r.reference
                  }),
                  g = await r.getSatisfying(A, c, n),
                  l = null == g ? void 0 : g[0]
                if (void 0 === l) return null
                const u = l.locatorHash,
                  h = e.originalPackages.get(u)
                if (void 0 === h)
                  throw new Error(
                    `Assertion failed: The package (${u}) should have been registered`
                  )
                return u === o
                  ? null
                  : { descriptor: A, currentPackage: s, updatedPackage: h }
              })
            },
          }
        class te extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.patterns = []),
              (this.strategy = W.HIGHEST),
              (this.check = !1),
              (this.json = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t } = await h.I.find(e, this.context.cwd),
              r = await g.C.find(e)
            let A = 0
            const n = await p.Pk.start(
              {
                configuration: e,
                includeFooter: !1,
                stdout: this.context.stdout,
                json: this.json,
              },
              async e => {
                A = await (async function (
                  e,
                  { strategy: t, patterns: r, cache: A, report: n }
                ) {
                  const { configuration: o } = e,
                    i = new I.$(),
                    s = o.makeResolver(),
                    a = o.makeFetcher(),
                    c = {
                      cache: A,
                      checksums: e.storedChecksums,
                      fetcher: a,
                      project: e,
                      report: i,
                      skipIntegrityCheck: !0,
                    },
                    g = { project: e, resolver: s, report: i, fetchOptions: c }
                  return await n.startTimerPromise(
                    'Deduplication step',
                    async () => {
                      const A = ee[t],
                        i = await A(e, r, {
                          resolver: s,
                          resolveOptions: g,
                          fetcher: a,
                          fetchOptions: c,
                        }),
                        l = X.yG.progressViaCounter(i.length)
                      n.reportProgress(l)
                      let h,
                        p = 0
                      switch (
                        (await Promise.all(
                          i.map(t =>
                            t
                              .then(t => {
                                if (null === t) return
                                p++
                                const {
                                  descriptor: r,
                                  currentPackage: A,
                                  updatedPackage: i,
                                } = t
                                n.reportInfo(
                                  u.b.UNNAMED,
                                  `${d.prettyDescriptor(
                                    o,
                                    r
                                  )} can be deduped from ${d.prettyLocator(
                                    o,
                                    A
                                  )} to ${d.prettyLocator(o, i)}`
                                ),
                                  n.reportJson({
                                    descriptor: d.stringifyDescriptor(r),
                                    currentResolution: d.stringifyLocator(A),
                                    updatedResolution: d.stringifyLocator(i),
                                  }),
                                  e.storedResolutions.set(
                                    r.descriptorHash,
                                    i.locatorHash
                                  )
                              })
                              .finally(() => l.tick())
                          )
                        ),
                        p)
                      ) {
                        case 0:
                          h = 'No packages'
                          break
                        case 1:
                          h = 'One package'
                          break
                        default:
                          h = p + ' packages'
                      }
                      const C = B.pretty(o, t, B.Type.CODE)
                      return (
                        n.reportInfo(
                          u.b.UNNAMED,
                          `${h} can be deduped using the ${C} strategy`
                        ),
                        p
                      )
                    }
                  )
                })(t, {
                  strategy: this.strategy,
                  patterns: this.patterns,
                  cache: r,
                  report: e,
                })
              }
            )
            if (n.hasErrors()) return n.exitCode()
            if (this.check) return A ? 1 : 0
            return (
              await p.Pk.start(
                {
                  configuration: e,
                  stdout: this.context.stdout,
                  json: this.json,
                },
                async e => {
                  await t.install({ cache: r, report: e })
                }
              )
            ).exitCode()
          }
        }
        ;(te.schema = V.object().shape({
          strategy: V.string().test({
            name: 'strategy',
            message: '${path} must be one of ${strategies}',
            params: { strategies: [...$].join(', ') },
            test: e => $.has(e),
          }),
        })),
          (te.usage = C.Command.Usage({
            description: 'deduplicate dependencies with overlapping ranges',
            details:
              "\n      Duplicates are defined as descriptors with overlapping ranges being resolved and locked to different locators. They are a natural consequence of Yarn's deterministic installs, but they can sometimes pile up and unnecessarily increase the size of your project.\n\n      This command dedupes dependencies in the current project using different strategies (only one is implemented at the moment):\n\n      - `highest`: Reuses (where possible) the locators with the highest versions. This means that dependencies can only be upgraded, never downgraded. It's also guaranteed that it never takes more than a single pass to dedupe the entire dependency tree.\n\n      **Note:** Even though it never produces a wrong dependency tree, this command should be used with caution, as it modifies the dependency tree, which can sometimes cause problems when packages don't strictly follow semver recommendations. Because of this, it is recommended to also review the changes manually.\n\n      If set, the `-c,--check` flag will only report the found duplicates, without persisting the modified dependency tree. If changes are found, the command will exit with a non-zero exit code, making it suitable for CI purposes.\n\n      This command accepts glob patterns as arguments (if valid Idents and supported by [micromatch](https://github.com/micromatch/micromatch)). Make sure to escape the patterns, to prevent your own shell from trying to expand them.\n\n      ### In-depth explanation:\n\n      Yarn doesn't deduplicate dependencies by default, otherwise installs wouldn't be deterministic and the lockfile would be useless. What it actually does is that it tries to not duplicate dependencies in the first place.\n\n      **Example:** If `foo@^2.3.4` (a dependency of a dependency) has already been resolved to `foo@2.3.4`, running `yarn add foo@*`will cause Yarn to reuse `foo@2.3.4`, even if the latest `foo` is actually `foo@2.10.14`, thus preventing unnecessary duplication.\n\n      Duplication happens when Yarn can't unlock dependencies that have already been locked inside the lockfile.\n\n      **Example:** If `foo@^2.3.4` (a dependency of a dependency) has already been resolved to `foo@2.3.4`, running `yarn add foo@2.10.14` will cause Yarn to install `foo@2.10.14` because the existing resolution doesn't satisfy the range `2.10.14`. This behavior can lead to (sometimes) unwanted duplication, since now the lockfile contains 2 separate resolutions for the 2 `foo` descriptors, even though they have overlapping ranges, which means that the lockfile can be simplified so that both descriptors resolve to `foo@2.10.14`.\n    ",
            examples: [
              ['Dedupe all packages', '$0 dedupe'],
              [
                'Dedupe all packages using a specific strategy',
                '$0 dedupe --strategy highest',
              ],
              ['Dedupe a specific package', '$0 dedupe lodash'],
              [
                'Dedupe all packages with the `@babel/*` scope',
                "$0 dedupe '@babel/*'",
              ],
              [
                'Check for duplicates (can be used as a CI step)',
                '$0 dedupe --check',
              ],
            ],
          })),
          (0, a.gn)([C.Command.Rest()], te.prototype, 'patterns', void 0),
          (0, a.gn)(
            [
              C.Command.String('-s,--strategy', {
                description: 'The strategy to use when deduping dependencies',
              }),
            ],
            te.prototype,
            'strategy',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('-c,--check', {
                description:
                  'Exit with exit code 1 when duplicates are found, without persisting the dependency tree',
              }),
            ],
            te.prototype,
            'check',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--json', {
                description: 'Format the output as an NDJSON stream',
              }),
            ],
            te.prototype,
            'json',
            void 0
          ),
          (0, a.gn)([C.Command.Path('dedupe')], te.prototype, 'execute', null)
        class re extends C.Command {
          async execute() {
            const { plugins: e } = await s.VK.find(
                this.context.cwd,
                this.context.plugins
              ),
              t = []
            for (const r of e) {
              const { commands: e } = r[1]
              if (e) {
                const A = C.Cli.from(e).definitions()
                t.push([r[0], A])
              }
            }
            const A = this.cli.definitions(),
              n = r(60306)['@yarnpkg/builder'].bundles.standard
            for (const e of t) {
              const t = e[1]
              for (const r of t)
                A.find(e => {
                  return (
                    (t = e.path),
                    (A = r.path),
                    t.split(' ').slice(1).join() ===
                      A.split(' ').slice(1).join()
                  )
                  var t, A
                }).plugin = { name: e[0], isDefault: n.includes(e[0]) }
            }
            this.context.stdout.write(
              JSON.stringify({ commands: A }, null, 2) + '\n'
            )
          }
        }
        ;(0, a.gn)(
          [C.Command.Path('--clipanion=definitions')],
          re.prototype,
          'execute',
          null
        )
        class Ae extends C.Command {
          async execute() {
            this.context.stdout.write(this.cli.usage(null))
          }
        }
        ;(0, a.gn)(
          [
            C.Command.Path('help'),
            C.Command.Path('--help'),
            C.Command.Path('-h'),
          ],
          Ae.prototype,
          'execute',
          null
        )
        class ne extends C.Command {
          constructor() {
            super(...arguments), (this.args = [])
          }
          async execute() {
            if (
              this.leadingArgument.match(/[\\/]/) &&
              !d.tryParseIdent(this.leadingArgument)
            ) {
              const e = m.y1.resolve(
                this.context.cwd,
                m.cS.toPortablePath(this.leadingArgument)
              )
              return await this.cli.run(this.args, { cwd: e })
            }
            return await this.cli.run([
              'run',
              this.leadingArgument,
              ...this.args,
            ])
          }
        }
        ;(0, a.gn)(
          [C.Command.String()],
          ne.prototype,
          'leadingArgument',
          void 0
        ),
          (0, a.gn)([C.Command.Proxy()], ne.prototype, 'args', void 0)
        var oe = r(59355)
        class ie extends C.Command {
          async execute() {
            this.context.stdout.write((oe.o || '<unknown>') + '\n')
          }
        }
        ;(0, a.gn)(
          [C.Command.Path('-v'), C.Command.Path('--version')],
          ie.prototype,
          'execute',
          null
        )
        var se = r(6220)
        class ae extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.args = [])
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t } = await h.I.find(e, this.context.cwd)
            return await y.xfs.mktempPromise(async e => {
              const { code: r } = await se.pipevp(this.commandName, this.args, {
                cwd: this.context.cwd,
                stdin: this.context.stdin,
                stdout: this.context.stdout,
                stderr: this.context.stderr,
                env: await R.makeScriptEnv({ project: t, binFolder: e }),
              })
              return r
            })
          }
        }
        ;(ae.usage = C.Command.Usage({
          description: 'execute a shell command',
          details:
            "\n      This command simply executes a shell binary within the context of the root directory of the active workspace.\n\n      It also makes sure to call it in a way that's compatible with the current project (for example, on PnP projects the environment will be setup in such a way that PnP will be correctly injected into the environment).\n    ",
          examples: [['Execute a shell command', '$0 exec echo Hello World']],
        })),
          (0, a.gn)([C.Command.String()], ae.prototype, 'commandName', void 0),
          (0, a.gn)([C.Command.Proxy()], ae.prototype, 'args', void 0),
          (0, a.gn)([C.Command.Path('exec')], ae.prototype, 'execute', null)
        var ce = r(36545)
        class ge extends c.BaseCommand {
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t } = await h.I.find(e, this.context.cwd)
            if ((await t.applyLightResolution(), void 0 !== this.hash))
              return await (async function (e, t, r) {
                const { configuration: A } = t,
                  n = t.peerRequirements.get(e)
                if (void 0 === n)
                  throw new Error(
                    `No peerDependency requirements found for hash: "${e}"`
                  )
                return (
                  await p.Pk.start(
                    { configuration: A, stdout: r.stdout, includeFooter: !1 },
                    async e => {
                      var r, o
                      const i = t.storedPackages.get(n.subject)
                      if (void 0 === i)
                        throw new Error(
                          'Assertion failed: Expected the subject package to have been registered'
                        )
                      const s = t.storedPackages.get(n.rootRequester)
                      if (void 0 === s)
                        throw new Error(
                          'Assertion failed: Expected the root package to have been registered'
                        )
                      const a =
                          null !==
                            (r = i.dependencies.get(n.requested.identHash)) &&
                          void 0 !== r
                            ? r
                            : null,
                        c =
                          null !== a
                            ? t.storedResolutions.get(a.descriptorHash)
                            : null
                      if (void 0 === c)
                        throw new Error(
                          'Assertion failed: Expected the resolution to have been registered'
                        )
                      const g = null !== c ? t.storedPackages.get(c) : null
                      if (void 0 === g)
                        throw new Error(
                          'Assertion failed: Expected the provided package to have been registered'
                        )
                      const l = [...n.allRequesters.values()].map(e => {
                        const r = t.storedPackages.get(e)
                        if (void 0 === r)
                          throw new Error(
                            'Assertion failed: Expected the package to be registered'
                          )
                        const A = d.devirtualizeLocator(r),
                          o = t.storedPackages.get(A.locatorHash)
                        if (void 0 === o)
                          throw new Error(
                            'Assertion failed: Expected the package to be registered'
                          )
                        const i = o.peerDependencies.get(n.requested.identHash)
                        if (void 0 === i)
                          throw new Error(
                            'Assertion failed: Expected the peer dependency to be registered'
                          )
                        return { pkg: r, peerDependency: i }
                      })
                      if (null !== g) {
                        const t = l.every(({ peerDependency: e }) =>
                          ce.satisfiesWithPrereleases(g.version, e.range)
                        )
                        e.reportInfo(
                          u.b.UNNAMED,
                          `${d.prettyLocator(A, i)} provides ${d.prettyLocator(
                            A,
                            g
                          )} with version ${d.prettyReference(
                            A,
                            null !== (o = g.version) && void 0 !== o
                              ? o
                              : '<missing>'
                          )}, which ${
                            t ? 'satisfies' : "doesn't satisfy"
                          } the following requirements:`
                        )
                      } else
                        e.reportInfo(
                          u.b.UNNAMED,
                          `${d.prettyLocator(
                            A,
                            i
                          )} doesn't provide ${d.prettyIdent(
                            A,
                            n.requested
                          )}, breaking the following requirements:`
                        )
                      e.reportSeparator()
                      const h = B.mark(A),
                        p = []
                      for (const { pkg: e, peerDependency: t } of P.sortMap(
                        l,
                        e => d.stringifyLocator(e.pkg)
                      )) {
                        const r =
                          null !== g &&
                          ce.satisfiesWithPrereleases(g.version, t.range)
                            ? h.Check
                            : h.Cross
                        p.push({
                          stringifiedLocator: d.stringifyLocator(e),
                          prettyLocator: d.prettyLocator(A, e),
                          prettyRange: d.prettyRange(A, t.range),
                          mark: r,
                        })
                      }
                      const C = Math.max(
                          ...p.map(({ stringifiedLocator: e }) => e.length)
                        ),
                        f = Math.max(...p.map(({ prettyRange: e }) => e.length))
                      for (const {
                        stringifiedLocator: t,
                        prettyLocator: r,
                        prettyRange: A,
                        mark: n,
                      } of P.sortMap(p, ({ stringifiedLocator: e }) => e))
                        e.reportInfo(
                          null,
                          `${r.padEnd(
                            C + (r.length - t.length),
                            ' '
                          )} → ${A.padEnd(f, ' ')} ${n}`
                        )
                      p.length > 1 &&
                        (e.reportSeparator(),
                        e.reportInfo(
                          u.b.UNNAMED,
                          'Note: these requirements start with ' +
                            d.prettyLocator(t.configuration, s)
                        ))
                    }
                  )
                ).exitCode()
              })(this.hash, t, { stdout: this.context.stdout })
            return (
              await p.Pk.start(
                {
                  configuration: e,
                  stdout: this.context.stdout,
                  includeFooter: !1,
                },
                async r => {
                  var A
                  const n = [
                    ([, e]) =>
                      d.stringifyLocator(t.storedPackages.get(e.subject)),
                    ([, e]) => d.stringifyIdent(e.requested),
                  ]
                  for (const [o, i] of P.sortMap(t.peerRequirements, n)) {
                    const n = t.storedPackages.get(i.subject)
                    if (void 0 === n)
                      throw new Error(
                        'Assertion failed: Expected the subject package to have been registered'
                      )
                    const s = t.storedPackages.get(i.rootRequester)
                    if (void 0 === s)
                      throw new Error(
                        'Assertion failed: Expected the root package to have been registered'
                      )
                    const a =
                        null !==
                          (A = n.dependencies.get(i.requested.identHash)) &&
                        void 0 !== A
                          ? A
                          : null,
                      c = B.pretty(e, o, B.Type.CODE),
                      g = d.prettyLocator(e, n),
                      l = d.prettyIdent(e, i.requested),
                      u = d.prettyIdent(e, s),
                      h = i.allRequesters.length - 1,
                      p = 'descendant' + (1 === h ? '' : 's'),
                      C = h > 0 ? ` and ${h} ${p}` : '',
                      f = null !== a ? 'provides' : "doesn't provide"
                    r.reportInfo(null, `${c} → ${g} ${f} ${l} to ${u}${C}`)
                  }
                }
              )
            ).exitCode()
          }
        }
        ;(ge.schema = V.object().shape({
          hash: V.string().matches(/^p[0-9a-f]{5}$/),
        })),
          (ge.usage = C.Command.Usage({
            description: 'explain a set of peer requirements',
            details:
              "\n      A set of peer requirements represents all peer requirements that a dependent must satisfy when providing a given peer request to a requester and its descendants.\n\n      When the hash argument is specified, this command prints a detailed explanation of all requirements of the set corresponding to the hash and whether they're satisfied or not.\n\n      When used without arguments, this command lists all sets of peer requirements and the corresponding hash that can be used to get detailed information about a given set.\n\n      **Note:** A hash is a six-letter p-prefixed code that can be obtained from peer dependency warnings or from the list of all peer requirements (`yarn explain peer-requirements`).\n    ",
            examples: [
              [
                'Explain the corresponding set of peer requirements for a hash',
                '$0 explain peer-requirements p1a4ed',
              ],
              [
                'List all sets of peer requirements',
                '$0 explain peer-requirements',
              ],
            ],
          })),
          (0, a.gn)(
            [C.Command.String({ required: !1 })],
            ge.prototype,
            'hash',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path('explain', 'peer-requirements')],
            ge.prototype,
            'execute',
            null
          )
        var le = r(85875)
        class ue extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.all = !1),
              (this.recursive = !1),
              (this.extra = []),
              (this.cache = !1),
              (this.dependents = !1),
              (this.manifest = !1),
              (this.nameOnly = !1),
              (this.virtuals = !1),
              (this.json = !1),
              (this.patterns = [])
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(
                e,
                this.context.cwd
              ),
              A = await g.C.find(e)
            if (!r && !this.all)
              throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd)
            await t.restoreInstallState()
            const n = new Set(this.extra)
            this.cache && n.add('cache'),
              this.dependents && n.add('dependents'),
              this.manifest && n.add('manifest')
            const o = (e, { recursive: r }) => {
                const A = e.anchoredLocator.locatorHash,
                  n = new Map(),
                  o = [A]
                for (; o.length > 0; ) {
                  const e = o.shift()
                  if (n.has(e)) continue
                  const i = t.storedPackages.get(e)
                  if (void 0 === i)
                    throw new Error(
                      'Assertion failed: Expected the package to be registered'
                    )
                  if (
                    (n.set(e, i),
                    d.isVirtualLocator(i) &&
                      o.push(d.devirtualizeLocator(i).locatorHash),
                    r || e === A)
                  )
                    for (const e of i.dependencies.values()) {
                      const r = t.storedResolutions.get(e.descriptorHash)
                      if (void 0 === r)
                        throw new Error(
                          'Assertion failed: Expected the resolution to be registered'
                        )
                      o.push(r)
                    }
                }
                return n.values()
              },
              i = ({ all: e, recursive: A }) =>
                e && A
                  ? t.storedPackages.values()
                  : e
                  ? (({ recursive: e }) => {
                      const r = new Map()
                      for (const A of t.workspaces)
                        for (const t of o(A, { recursive: e }))
                          r.set(t.locatorHash, t)
                      return r.values()
                    })({ recursive: A })
                  : o(r, { recursive: A }),
              { selection: a, sortedLookup: l } = (({
                all: e,
                recursive: t,
              }) => {
                const r = i({ all: e, recursive: t }),
                  A = this.patterns.map(e => {
                    const t = d.parseLocator(e),
                      r = Z().makeRe(d.stringifyIdent(t)),
                      A = d.isVirtualLocator(t),
                      n = A ? d.devirtualizeLocator(t) : t
                    return e => {
                      const o = d.stringifyIdent(e)
                      if (!r.test(o)) return !1
                      if ('unknown' === t.reference) return !0
                      const i = d.isVirtualLocator(e),
                        s = i ? d.devirtualizeLocator(e) : e
                      return (
                        (!A || !i || t.reference === e.reference) &&
                        n.reference === s.reference
                      )
                    }
                  }),
                  n = P.sortMap([...r], e => d.stringifyLocator(e))
                return {
                  selection: n.filter(e => 0 === A.length || A.some(t => t(e))),
                  sortedLookup: n,
                }
              })({ all: this.all, recursive: this.recursive })
            if (0 === a.length)
              throw new C.UsageError('No package matched your request')
            const u = new Map()
            if (this.dependents)
              for (const e of l)
                for (const r of e.dependencies.values()) {
                  const A = t.storedResolutions.get(r.descriptorHash)
                  if (void 0 === A)
                    throw new Error(
                      'Assertion failed: Expected the resolution to be registered'
                    )
                  P.getArrayWithDefault(u, A).push(e)
                }
            const p = new Map()
            for (const e of l) {
              if (!d.isVirtualLocator(e)) continue
              const t = d.devirtualizeLocator(e)
              P.getArrayWithDefault(p, t.locatorHash).push(e)
            }
            const f = {},
              m = { children: f },
              w = e.makeFetcher(),
              Q = {
                project: t,
                fetcher: w,
                cache: A,
                checksums: t.storedChecksums,
                report: new I.$(),
                skipIntegrityCheck: !0,
              },
              D = [
                async (e, t, r) => {
                  var A, n
                  if (!t.has('manifest')) return
                  const o = await w.fetch(e, Q)
                  let i
                  try {
                    i = await E.G.find(o.prefixPath, { baseFs: o.packageFs })
                  } finally {
                    null === (A = o.releaseFs) || void 0 === A || A.call(o)
                  }
                  r('Manifest', {
                    License: B.tuple(B.Type.NO_HINT, i.license),
                    Homepage: B.tuple(
                      B.Type.URL,
                      null !== (n = i.raw.homepage) && void 0 !== n ? n : null
                    ),
                  })
                },
                async (e, r, n) => {
                  var o
                  if (!r.has('cache')) return
                  const i =
                      null !== (o = t.storedChecksums.get(e.locatorHash)) &&
                      void 0 !== o
                        ? o
                        : null,
                    s = A.getLocatorPath(e, i)
                  let a
                  if (null !== s)
                    try {
                      a = y.xfs.statSync(s)
                    } catch (e) {}
                  const c = void 0 !== a ? [a.size, B.Type.SIZE] : void 0
                  n('Cache', {
                    Checksum: B.tuple(B.Type.NO_HINT, i),
                    Path: B.tuple(B.Type.PATH, s),
                    Size: c,
                  })
                },
              ]
            for (const r of a) {
              const A = d.isVirtualLocator(r)
              if (!this.virtuals && A) continue
              const o = {},
                i = { value: [r, B.Type.LOCATOR], children: o }
              if (((f[d.stringifyLocator(r)] = i), this.nameOnly)) {
                delete i.children
                continue
              }
              const s = p.get(r.locatorHash)
              void 0 !== s &&
                (o.Instances = {
                  label: 'Instances',
                  value: B.tuple(B.Type.NUMBER, s.length),
                }),
                (o.Version = {
                  label: 'Version',
                  value: B.tuple(B.Type.NO_HINT, r.version),
                })
              const a = (e, t) => {
                const r = {}
                if (((o[e] = r), Array.isArray(t)))
                  r.children = t.map(e => ({ value: e }))
                else {
                  const e = {}
                  r.children = e
                  for (const [r, A] of Object.entries(t))
                    void 0 !== A && (e[r] = { label: r, value: A })
                }
              }
              if (!A) {
                for (const e of D) await e(r, n, a)
                await e.triggerHook(e => e.fetchPackageInfo, r, n, a)
              }
              r.bin.size > 0 &&
                !A &&
                a(
                  'Exported Binaries',
                  [...r.bin.keys()].map(e => B.tuple(B.Type.PATH, e))
                )
              const c = u.get(r.locatorHash)
              void 0 !== c &&
                c.length > 0 &&
                a(
                  'Dependents',
                  c.map(e => B.tuple(B.Type.LOCATOR, e))
                ),
                r.dependencies.size > 0 &&
                  !A &&
                  a(
                    'Dependencies',
                    [...r.dependencies.values()].map(e => {
                      var r
                      const A = t.storedResolutions.get(e.descriptorHash),
                        n =
                          void 0 !== A &&
                          null !== (r = t.storedPackages.get(A)) &&
                          void 0 !== r
                            ? r
                            : null
                      return B.tuple(B.Type.RESOLUTION, {
                        descriptor: e,
                        locator: n,
                      })
                    })
                  ),
                r.peerDependencies.size > 0 &&
                  A &&
                  a(
                    'Peer dependencies',
                    [...r.peerDependencies.values()].map(e => {
                      var A, n
                      const o = r.dependencies.get(e.identHash),
                        i =
                          void 0 !== o &&
                          null !==
                            (A = t.storedResolutions.get(o.descriptorHash)) &&
                          void 0 !== A
                            ? A
                            : null,
                        s =
                          null !== i &&
                          null !== (n = t.storedPackages.get(i)) &&
                          void 0 !== n
                            ? n
                            : null
                      return B.tuple(B.Type.RESOLUTION, {
                        descriptor: e,
                        locator: s,
                      })
                    })
                  )
            }
            le.emitTree(m, {
              configuration: e,
              json: this.json,
              stdout: this.context.stdout,
              separators: this.nameOnly ? 0 : 2,
            })
          }
        }
        ;(ue.usage = C.Command.Usage({
          description: 'see information related to packages',
          details:
            '\n      This command prints various information related to the specified packages, accepting glob patterns.\n\n      By default, if the locator reference is missing, Yarn will default to print the information about all the matching direct dependencies of the package for the active workspace. To instead print all versions of the package that are direct dependencies of any of your workspaces, use the `-A,--all` flag. Adding the `-R,--recursive` flag will also report transitive dependencies.\n\n      Some fields will be hidden by default in order to keep the output readable, but can be selectively displayed by using additional options (`--dependents`, `--manifest`, `--virtuals`, ...) described in the option descriptions.\n\n      Note that this command will only print the information directly related to the selected packages - if you wish to know why the package is there in the first place, use `yarn why` which will do just that (it also provides a `-R,--recursive` flag that may be of some help).\n    ',
          examples: [['Show information about Lodash', '$0 info lodash']],
        })),
          (0, a.gn)(
            [
              C.Command.Boolean('-A,--all', {
                description:
                  'Print versions of a package from the whole project',
              }),
            ],
            ue.prototype,
            'all',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('-R,--recursive', {
                description:
                  'Print information for all packages, including transitive dependencies',
              }),
            ],
            ue.prototype,
            'recursive',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Array('-X,--extra', {
                description:
                  'An array of requests of extra data provided by plugins',
              }),
            ],
            ue.prototype,
            'extra',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--cache', {
                description:
                  'Print information about the cache entry of a package (path, size, checksum)',
              }),
            ],
            ue.prototype,
            'cache',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--dependents', {
                description: 'Print all dependents for each matching package',
              }),
            ],
            ue.prototype,
            'dependents',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--manifest', {
                description:
                  'Print data obtained by looking at the package archive (license, homepage, ...)',
              }),
            ],
            ue.prototype,
            'manifest',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--name-only', {
                description: 'Only print the name for the matching packages',
              }),
            ],
            ue.prototype,
            'nameOnly',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--virtuals', {
                description: 'Print each instance of the virtual packages',
              }),
            ],
            ue.prototype,
            'virtuals',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--json', {
                description: 'Format the output as an NDJSON stream',
              }),
            ],
            ue.prototype,
            'json',
            void 0
          ),
          (0, a.gn)([C.Command.Rest()], ue.prototype, 'patterns', void 0),
          (0, a.gn)([C.Command.Path('info')], ue.prototype, 'execute', null)
        var he = r(11640),
          pe = r(5864)
        class de extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.json = !1),
              (this.checkCache = !1),
              (this.skipBuilds = !1),
              (this.silent = !1)
          }
          async execute() {
            var e, t, r
            const A = await s.VK.find(this.context.cwd, this.context.plugins)
            void 0 !== this.inlineBuilds &&
              A.useWithSource(
                '<cli>',
                { enableInlineBuilds: this.inlineBuilds },
                A.startingCwd,
                { overwrite: !0 }
              )
            const n = !!process.env.NOW_BUILDER,
              o = !!process.env.NETLIFY,
              i = !!process.env.FUNCTION_TARGET || !!process.env.GOOGLE_RUNTIME,
              a = async (e, { error: t }) => {
                const r = await p.Pk.start(
                  {
                    configuration: A,
                    stdout: this.context.stdout,
                    includeFooter: !1,
                  },
                  async r => {
                    t
                      ? r.reportError(u.b.DEPRECATED_CLI_SETTINGS, e)
                      : r.reportWarning(u.b.DEPRECATED_CLI_SETTINGS, e)
                  }
                )
                return r.hasErrors() ? r.exitCode() : null
              }
            if (void 0 !== this.ignoreEngines) {
              const e = await a(
                "The --ignore-engines option is deprecated; engine checking isn't a core feature anymore",
                { error: !n }
              )
              if (null !== e) return e
            }
            if (void 0 !== this.registry) {
              const e = await a(
                'The --registry option is deprecated; prefer setting npmRegistryServer in your .yarnrc.yml file',
                { error: !1 }
              )
              if (null !== e) return e
            }
            if (void 0 !== this.preferOffline) {
              const e = await a(
                "The --prefer-offline flag is deprecated; use the --cached flag with 'yarn add' instead",
                { error: !n }
              )
              if (null !== e) return e
            }
            if (void 0 !== this.production) {
              const e = await a(
                "The --production option is deprecated on 'install'; use 'yarn workspaces focus' instead",
                { error: !0 }
              )
              if (null !== e) return e
            }
            if (void 0 !== this.nonInteractive) {
              const e = await a('The --non-interactive option is deprecated', {
                error: !i,
              })
              if (null !== e) return e
            }
            if (void 0 !== this.frozenLockfile) {
              const e = await a(
                'The --frozen-lockfile option is deprecated; use --immutable and/or --immutable-cache instead',
                { error: !i && !pe.TRAVIS }
              )
              if (null !== e) return e
            }
            if (void 0 !== this.cacheFolder) {
              const e = await a(
                'The cache-folder option has been deprecated; use rc settings instead',
                { error: !o }
              )
              if (null !== e) return e
            }
            const l =
              void 0 === this.immutable && void 0 === this.frozenLockfile
                ? null !== (e = A.get('enableImmutableInstalls')) &&
                  void 0 !== e &&
                  e
                : null !==
                    (r =
                      null !== (t = this.immutable) && void 0 !== t
                        ? t
                        : this.frozenLockfile) &&
                  void 0 !== r &&
                  r
            if (null !== A.projectCwd) {
              const e = await p.Pk.start(
                {
                  configuration: A,
                  json: this.json,
                  stdout: this.context.stdout,
                  includeFooter: !1,
                },
                async e => {
                  ;(await (async function (e, t) {
                    if (!e.projectCwd) return !1
                    const r = m.y1.join(e.projectCwd, e.get('lockfileFilename'))
                    if (!(await y.xfs.existsPromise(r))) return !1
                    const A = await y.xfs.readFilePromise(r, 'utf8')
                    if (!A.includes('<<<<<<<')) return !1
                    if (t)
                      throw new X.lk(
                        u.b.AUTOMERGE_IMMUTABLE,
                        'Cannot autofix a lockfile when running an immutable install'
                      )
                    const [n, o] = (function (e) {
                      const t = [[], []],
                        r = e.split(/\r?\n/g)
                      let A = !1
                      for (; r.length > 0; ) {
                        const e = r.shift()
                        if (void 0 === e)
                          throw new Error(
                            'Assertion failed: Some lines should remain'
                          )
                        if (e.startsWith('<<<<<<<')) {
                          for (; r.length > 0; ) {
                            const e = r.shift()
                            if (void 0 === e)
                              throw new Error(
                                'Assertion failed: Some lines should remain'
                              )
                            if ('=======' === e) {
                              A = !1
                              break
                            }
                            A || e.startsWith('|||||||')
                              ? (A = !0)
                              : t[0].push(e)
                          }
                          for (; r.length > 0; ) {
                            const e = r.shift()
                            if (void 0 === e)
                              throw new Error(
                                'Assertion failed: Some lines should remain'
                              )
                            if (e.startsWith('>>>>>>>')) break
                            t[1].push(e)
                          }
                        } else t[0].push(e), t[1].push(e)
                      }
                      return [t[0].join('\n'), t[1].join('\n')]
                    })(A)
                    let i, s
                    try {
                      ;(i = (0, he.parseSyml)(n)), (s = (0, he.parseSyml)(o))
                    } catch (e) {
                      throw new X.lk(
                        u.b.AUTOMERGE_FAILED_TO_PARSE,
                        'The individual variants of the lockfile failed to parse'
                      )
                    }
                    const a = { ...i, ...s }
                    for (const [e, t] of Object.entries(a))
                      'string' == typeof t && delete a[e]
                    return (
                      await y.xfs.changeFilePromise(
                        r,
                        (0, he.stringifySyml)(a),
                        { automaticNewlines: !0 }
                      ),
                      !0
                    )
                  })(A, l)) &&
                    (e.reportInfo(
                      u.b.AUTOMERGE_SUCCESS,
                      'Automatically fixed merge conflicts 👍'
                    ),
                    e.reportSeparator())
                }
              )
              if (e.hasErrors()) return e.exitCode()
            }
            if (null !== A.projectCwd) {
              const e = await p.Pk.start(
                {
                  configuration: A,
                  json: this.json,
                  stdout: this.context.stdout,
                  includeFooter: !1,
                },
                async e => {
                  var t
                  ;(null === (t = s.VK.telemetry) || void 0 === t
                    ? void 0
                    : t.isNew) &&
                    (e.reportInfo(
                      u.b.TELEMETRY_NOTICE,
                      'Yarn will periodically gather anonymous telemetry: https://yarnpkg.com/advanced/telemetry'
                    ),
                    e.reportInfo(
                      u.b.TELEMETRY_NOTICE,
                      `Run ${B.pretty(
                        A,
                        'yarn config set --home enableTelemetry 0',
                        B.Type.CODE
                      )} to disable`
                    ),
                    e.reportSeparator())
                }
              )
              if (e.hasErrors()) return e.exitCode()
            }
            const { project: d, workspace: C } = await h.I.find(
                A,
                this.context.cwd
              ),
              f = await g.C.find(A, {
                immutable: this.immutableCache,
                check: this.checkCache,
              })
            if (!C) throw new c.WorkspaceRequiredError(d.cwd, this.context.cwd)
            await d.restoreInstallState({ restoreResolutions: !1 })
            return (
              await p.Pk.start(
                {
                  configuration: A,
                  json: this.json,
                  stdout: this.context.stdout,
                  includeLogs: !0,
                },
                async e => {
                  await d.install({
                    cache: f,
                    report: e,
                    immutable: l,
                    skipBuild: this.skipBuilds,
                  })
                }
              )
            ).exitCode()
          }
        }
        ;(de.usage = C.Command.Usage({
          description: 'install the project dependencies',
          details:
            "\n      This command setup your project if needed. The installation is splitted in four different steps that each have their own characteristics:\n\n      - **Resolution:** First the package manager will resolve your dependencies. The exact way a dependency version is privileged over another isn't standardized outside of the regular semver guarantees. If a package doesn't resolve to what you would expect, check that all dependencies are correctly declared (also check our website for more information: ).\n\n      - **Fetch:** Then we download all the dependencies if needed, and make sure that they're all stored within our cache (check the value of `cacheFolder` in `yarn config` to see where are stored the cache files).\n\n      - **Link:** Then we send the dependency tree information to internal plugins tasked from writing them on the disk in some form (for example by generating the .pnp.js file you might know).\n\n      - **Build:** Once the dependency tree has been written on the disk, the package manager will now be free to run the build scripts for all packages that might need it, in a topological order compatible with the way they depend on one another.\n\n      Note that running this command is not part of the recommended workflow. Yarn supports zero-installs, which means that as long as you store your cache and your .pnp.js file inside your repository, everything will work without requiring any install right after cloning your repository or switching branches.\n\n      If the `--immutable` option is set, Yarn will abort with an error exit code if the lockfile was to be modified (other paths can be added using the `immutablePaths` configuration setting). For backward compatibility we offer an alias under the name of `--frozen-lockfile`, but it will be removed in a later release.\n\n      If the `--immutable-cache` option is set, Yarn will abort with an error exit code if the cache folder was to be modified (either because files would be added, or because they'd be removed).\n\n      If the `--check-cache` option is set, Yarn will always refetch the packages and will ensure that their checksum matches what's 1/ described in the lockfile 2/ inside the existing cache files (if present). This is recommended as part of your CI workflow if you're both following the Zero-Installs model and accepting PRs from third-parties, as they'd otherwise have the ability to alter the checked-in packages before submitting them.\n\n      If the `--inline-builds` option is set, Yarn will verbosely print the output of the build steps of your dependencies (instead of writing them into individual files). This is likely useful mostly for debug purposes only when using Docker-like environments.\n\n      If the `--skip-builds` option is set, Yarn will not run the build scripts at all. Note that this is different from setting `enableScripts` to false because the later will disable build scripts, and thus affect the content of the artifacts generated on disk, whereas the former will just disable the build step - but not the scripts themselves, which just won't run.\n    ",
          examples: [
            ['Install the project', '$0 install'],
            [
              'Validate a project when using Zero-Installs',
              '$0 install --immutable --immutable-cache',
            ],
            [
              'Validate a project when using Zero-Installs (slightly safer if you accept external PRs)',
              '$0 install --immutable --immutable-cache --check-cache',
            ],
          ],
        })),
          (0, a.gn)(
            [
              C.Command.Boolean('--json', {
                description: 'Format the output as an NDJSON stream',
              }),
            ],
            de.prototype,
            'json',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--immutable', {
                description:
                  'Abort with an error exit code if the lockfile was to be modified',
              }),
            ],
            de.prototype,
            'immutable',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--immutable-cache', {
                description:
                  'Abort with an error exit code if the cache folder was to be modified',
              }),
            ],
            de.prototype,
            'immutableCache',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--check-cache', {
                description:
                  'Always refetch the packages and ensure that their checksums are consistent',
              }),
            ],
            de.prototype,
            'checkCache',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean('--production', { hidden: !0 })],
            de.prototype,
            'production',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean('--non-interactive', { hidden: !0 })],
            de.prototype,
            'nonInteractive',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean('--frozen-lockfile', { hidden: !0 })],
            de.prototype,
            'frozenLockfile',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean('--prefer-offline', { hidden: !0 })],
            de.prototype,
            'preferOffline',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean('--ignore-engines', { hidden: !0 })],
            de.prototype,
            'ignoreEngines',
            void 0
          ),
          (0, a.gn)(
            [C.Command.String('--registry', { hidden: !0 })],
            de.prototype,
            'registry',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--inline-builds', {
                description:
                  'Verbosely print the output of the build steps of dependencies',
              }),
            ],
            de.prototype,
            'inlineBuilds',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--skip-builds', {
                description: 'Skip the build step altogether',
              }),
            ],
            de.prototype,
            'skipBuilds',
            void 0
          ),
          (0, a.gn)(
            [C.Command.String('--cache-folder', { hidden: !0 })],
            de.prototype,
            'cacheFolder',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean('--silent', { hidden: !0 })],
            de.prototype,
            'silent',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path(), C.Command.Path('install')],
            de.prototype,
            'execute',
            null
          )
        class Ce extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.all = !1),
              (this.private = !1),
              (this.relative = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(
                e,
                this.context.cwd
              ),
              A = await g.C.find(e)
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd)
            const n = m.y1.resolve(
                this.context.cwd,
                m.cS.toPortablePath(this.destination)
              ),
              o = await s.VK.find(n, this.context.plugins),
              { project: i, workspace: a } = await h.I.find(o, n)
            if (!a) throw new c.WorkspaceRequiredError(i.cwd, n)
            const l = t.topLevelWorkspace,
              u = []
            if (this.all) {
              for (const e of i.workspaces)
                !e.manifest.name ||
                  (e.manifest.private && !this.private) ||
                  u.push(e)
              if (0 === u.length)
                throw new C.UsageError(
                  'No workspace found to be linked in the target project'
                )
            } else {
              if (!a.manifest.name)
                throw new C.UsageError(
                  "The target workspace doesn't have a name and thus cannot be linked"
                )
              if (a.manifest.private && !this.private)
                throw new C.UsageError(
                  'The target workspace is marked private - use the --private flag to link it anyway'
                )
              u.push(a)
            }
            for (const e of u) {
              const r = d.stringifyIdent(e.locator),
                A = this.relative ? m.y1.relative(t.cwd, e.cwd) : e.cwd
              l.manifest.resolutions.push({
                pattern: { descriptor: { fullName: r } },
                reference: 'portal:' + A,
              })
            }
            return (
              await p.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async e => {
                  await t.install({ cache: A, report: e })
                }
              )
            ).exitCode()
          }
        }
        ;(Ce.usage = C.Command.Usage({
          description: 'connect the local project to another one',
          details:
            '\n      This command will set a new `resolutions` field in the project-level manifest and point it to the workspace at the specified location (even if part of another project).\n\n      There is no `yarn unlink` command. To unlink the workspaces from the current project one must revert the changes made to the `resolutions` field.\n    ',
          examples: [
            [
              'Register a remote workspace for use in the current project',
              '$0 link ~/ts-loader',
            ],
            [
              'Register all workspaces from a remote project for use in the current project',
              '$0 link ~/jest --all',
            ],
          ],
        })),
          (0, a.gn)([C.Command.String()], Ce.prototype, 'destination', void 0),
          (0, a.gn)(
            [
              C.Command.Boolean('-A,--all', {
                description:
                  'Link all workspaces belonging to the target project to the current one',
              }),
            ],
            Ce.prototype,
            'all',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('-p,--private', {
                description:
                  'Also link private workspaces belonging to the target project to the current one',
              }),
            ],
            Ce.prototype,
            'private',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('-r,--relative', {
                description:
                  'Link workspaces using relative paths instead of absolute paths',
              }),
            ],
            Ce.prototype,
            'relative',
            void 0
          ),
          (0, a.gn)([C.Command.Path('link')], Ce.prototype, 'execute', null)
        class fe extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.args = [])
          }
          async execute() {
            return this.cli.run(['exec', 'node', ...this.args])
          }
        }
        ;(fe.usage = C.Command.Usage({
          description: 'run node with the hook already setup',
          details:
            "\n      This command simply runs Node. It also makes sure to call it in a way that's compatible with the current project (for example, on PnP projects the environment will be setup in such a way that PnP will be correctly injected into the environment).\n\n      The Node process will use the exact same version of Node as the one used to run Yarn itself, which might be a good way to ensure that your commands always use a consistent Node version.\n    ",
          examples: [['Run a Node script', '$0 node ./my-script.js']],
        })),
          (0, a.gn)([C.Command.Proxy()], fe.prototype, 'args', void 0),
          (0, a.gn)([C.Command.Path('node')], fe.prototype, 'execute', null)
        var Ie = r(20624),
          Ee = r(12087),
          Be = r(85622),
          ye = r.n(Be),
          me = r(79669)
        class we extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.onlyIfNeeded = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins)
            if (e.get('yarnPath') && this.onlyIfNeeded) return 0
            let t
            if ('latest' === this.version || 'berry' === this.version)
              t =
                'https://github.com/yarnpkg/berry/raw/master/packages/yarnpkg-cli/bin/yarn.js'
            else if ('classic' === this.version)
              t = 'https://nightly.yarnpkg.com/latest.js'
            else if (ce.satisfiesWithPrereleases(this.version, '>=2.0.0'))
              t = `https://github.com/yarnpkg/berry/raw/%40yarnpkg/cli/${this.version}/packages/yarnpkg-cli/bin/yarn.js`
            else {
              if (!ce.satisfiesWithPrereleases(this.version, '^0.x || ^1.x'))
                throw Q().validRange(this.version)
                  ? new C.UsageError(
                      "Support for ranges got removed - please use the exact version you want to install, or 'latest' to get the latest build available"
                    )
                  : new C.UsageError(
                      `Invalid version descriptor "${this.version}"`
                    )
              t = `https://github.com/yarnpkg/yarn/releases/download/v${this.version}/yarn-${this.version}.js`
            }
            return (
              await p.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async r => {
                  r.reportInfo(
                    u.b.UNNAMED,
                    'Downloading ' + B.pretty(e, t, 'green')
                  )
                  const A = await me.get(t, { configuration: e })
                  await Qe(e, null, A, { report: r })
                }
              )
            ).exitCode()
          }
        }
        async function Qe(e, t, r, { report: A }) {
          const n = e.projectCwd ? e.projectCwd : e.startingCwd
          null === t &&
            (await y.xfs.mktempPromise(async e => {
              const A = m.y1.join(e, 'yarn.cjs')
              await y.xfs.writeFilePromise(A, r)
              const { stdout: o } = await se.execvp(
                process.execPath,
                [m.cS.fromPortablePath(A), '--version'],
                { cwd: n, env: { ...process.env, YARN_IGNORE_PATH: '1' } }
              )
              if (((t = o.trim()), !Q().valid(t)))
                throw new Error('Invalid semver version')
            }))
          const o = m.y1.resolve(n, '.yarn/releases'),
            i = m.y1.resolve(o, `yarn-${t}.cjs`),
            a = m.y1.relative(e.startingCwd, i),
            c = m.y1.relative(n, i),
            g = e.get('yarnPath'),
            l = null === g || g.startsWith(o + '/')
          A.reportInfo(
            u.b.UNNAMED,
            'Saving the new release in ' + B.pretty(e, a, 'magenta')
          ),
            await y.xfs.removePromise(m.y1.dirname(i)),
            await y.xfs.mkdirPromise(m.y1.dirname(i), { recursive: !0 }),
            await y.xfs.writeFilePromise(i, r),
            await y.xfs.chmodPromise(i, 493),
            l && (await s.VK.updateConfiguration(n, { yarnPath: c }))
        }
        ;(we.usage = C.Command.Usage({
          description: 'lock the Yarn version used by the project',
          details:
            '\n      This command will download a specific release of Yarn directly from the Yarn GitHub repository, will store it inside your project, and will change the `yarnPath` settings from your project `.yarnrc.yml` file to point to the new file.\n\n      A very good use case for this command is to enforce the version of Yarn used by the any single member of your team inside a same project - by doing this you ensure that you have control on Yarn upgrades and downgrades (including on your deployment servers), and get rid of most of the headaches related to someone using a slightly different version and getting a different behavior than you.\n    ',
          examples: [
            [
              'Download the latest release from the Yarn repository',
              '$0 set version latest',
            ],
            [
              'Download the latest classic release from the Yarn repository',
              '$0 set version classic',
            ],
            ['Download a specific Yarn 2 build', '$0 set version 2.0.0-rc.30'],
            [
              'Switch back to a specific Yarn 1 release',
              '$0 set version 1.22.1',
            ],
          ],
        })),
          (0, a.gn)(
            [
              C.Command.Boolean('--only-if-needed', {
                description:
                  "Only lock the Yarn version if it isn't already locked",
              }),
            ],
            we.prototype,
            'onlyIfNeeded',
            void 0
          ),
          (0, a.gn)([C.Command.String()], we.prototype, 'version', void 0),
          (0, a.gn)(
            [
              C.Command.Path('policies', 'set-version'),
              C.Command.Path('set', 'version'),
            ],
            we.prototype,
            'execute',
            null
          )
        const De = /^[0-9]+$/
        function be(e) {
          return De.test(e) ? `pull/${e}/head` : e
        }
        class ve extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.repository = 'https://github.com/yarnpkg/berry.git'),
              (this.branch = 'master'),
              (this.plugins = []),
              (this.noMinify = !1),
              (this.force = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              t =
                void 0 !== this.installPath
                  ? m.y1.resolve(
                      this.context.cwd,
                      m.cS.toPortablePath(this.installPath)
                    )
                  : m.y1.resolve(
                      m.cS.toPortablePath((0, Ee.tmpdir)()),
                      'yarnpkg-sources',
                      Ie.makeHash(this.repository).slice(0, 6)
                    )
            return (
              await p.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async r => {
                  await ke(this, { configuration: e, report: r, target: t }),
                    r.reportSeparator(),
                    r.reportInfo(u.b.UNNAMED, 'Building a fresh bundle'),
                    r.reportSeparator(),
                    await Se(
                      (({ plugins: e, noMinify: t }, r) => [
                        [
                          'yarn',
                          'build:cli',
                          ...new Array().concat(
                            ...e.map(e => ['--plugin', ye().resolve(r, e)])
                          ),
                          ...(t ? ['--no-minify'] : []),
                          '|',
                        ],
                      ])(this, t),
                      { configuration: e, context: this.context, target: t }
                    ),
                    r.reportSeparator()
                  const A = m.y1.resolve(
                      t,
                      'packages/yarnpkg-cli/bundles/yarn.js'
                    ),
                    n = await y.xfs.readFilePromise(A)
                  await Qe(e, 'sources', n, { report: r })
                }
              )
            ).exitCode()
          }
        }
        async function Se(e, { configuration: t, context: r, target: A }) {
          for (const [n, ...o] of e) {
            const e = '|' === o[o.length - 1]
            if ((e && o.pop(), e))
              await se.pipevp(n, o, {
                cwd: A,
                stdin: r.stdin,
                stdout: r.stdout,
                stderr: r.stderr,
                strict: !0,
              })
            else {
              r.stdout.write(
                B.pretty(t, '  $ ' + [n, ...o].join(' '), 'grey') + '\n'
              )
              try {
                await se.execvp(n, o, { cwd: A, strict: !0 })
              } catch (e) {
                throw (r.stdout.write(e.stdout || e.stack), e)
              }
            }
          }
        }
        async function ke(e, { configuration: t, report: r, target: A }) {
          let n = !1
          if (!e.force && y.xfs.existsSync(m.y1.join(A, '.git'))) {
            r.reportInfo(u.b.UNNAMED, 'Fetching the latest commits'),
              r.reportSeparator()
            try {
              await Se(
                (({ branch: e }) => [
                  ['git', 'fetch', 'origin', be(e), '--force'],
                  ['git', 'reset', '--hard', 'FETCH_HEAD'],
                  ['git', 'clean', '-dfx'],
                ])(e),
                { configuration: t, context: e.context, target: A }
              ),
                (n = !0)
            } catch (e) {
              r.reportSeparator(),
                r.reportWarning(
                  u.b.UNNAMED,
                  "Repository update failed; we'll try to regenerate it"
                )
            }
          }
          n ||
            (r.reportInfo(u.b.UNNAMED, 'Cloning the remote repository'),
            r.reportSeparator(),
            await y.xfs.removePromise(A),
            await y.xfs.mkdirPromise(A, { recursive: !0 }),
            await Se(
              (({ repository: e, branch: t }, r) => [
                ['git', 'init', m.cS.fromPortablePath(r)],
                ['git', 'remote', 'add', 'origin', e],
                ['git', 'fetch', 'origin', be(t)],
                ['git', 'reset', '--hard', 'FETCH_HEAD'],
              ])(e, A),
              { configuration: t, context: e.context, target: A }
            ))
        }
        ;(ve.usage = C.Command.Usage({
          description: 'build Yarn from master',
          details:
            '\n      This command will clone the Yarn repository into a temporary folder, then build it. The resulting bundle will then be copied into the local project.\n    ',
          examples: [['Build Yarn from master', '$0 set version from sources']],
        })),
          (0, a.gn)(
            [
              C.Command.String('--path', {
                description:
                  'The path where the repository should be cloned to',
              }),
            ],
            ve.prototype,
            'installPath',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.String('--repository', {
                description: 'The repository that should be cloned',
              }),
            ],
            ve.prototype,
            'repository',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.String('--branch', {
                description:
                  'The branch of the repository that should be cloned',
              }),
            ],
            ve.prototype,
            'branch',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Array('--plugin', {
                description:
                  'An array of additional plugins that should be included in the bundle',
              }),
            ],
            ve.prototype,
            'plugins',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--no-minify', {
                description:
                  'Build a bundle for development (debugging) - non-minified and non-mangled',
              }),
            ],
            ve.prototype,
            'noMinify',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('-f,--force', {
                description:
                  'Always clone the repository instead of trying to fetch the latest commits',
              }),
            ],
            ve.prototype,
            'force',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path('set', 'version', 'from', 'sources')],
            ve.prototype,
            'execute',
            null
          )
        var Ne = r(78835)
        const Fe = require('vm')
        async function Ke(e) {
          const t = await me.get(
            'https://raw.githubusercontent.com/yarnpkg/berry/master/plugins.yml',
            { configuration: e }
          )
          return (0, he.parseSyml)(t.toString())
        }
        class Me extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.json = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins)
            return (
              await p.Pk.start(
                {
                  configuration: e,
                  json: this.json,
                  stdout: this.context.stdout,
                },
                async t => {
                  const r = await Ke(e)
                  for (const [e, { experimental: A, ...n }] of Object.entries(
                    r
                  )) {
                    let r = e
                    A && (r += ' [experimental]'),
                      t.reportJson({ name: e, experimental: A, ...n }),
                      t.reportInfo(null, r)
                  }
                }
              )
            ).exitCode()
          }
        }
        ;(Me.usage = C.Command.Usage({
          category: 'Plugin-related commands',
          description: 'list the available official plugins',
          details:
            '\n      This command prints the plugins available directly from the Yarn repository. Only those plugins can be referenced by name in `yarn plugin import`.\n    ',
          examples: [['List the official plugins', '$0 plugin list']],
        })),
          (0, a.gn)(
            [
              C.Command.Boolean('--json', {
                description: 'Format the output as an NDJSON stream',
              }),
            ],
            Me.prototype,
            'json',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path('plugin', 'list')],
            Me.prototype,
            'execute',
            null
          )
        class Re extends c.BaseCommand {
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins)
            return (
              await p.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async t => {
                  const { project: r } = await h.I.find(e, this.context.cwd)
                  let A, n
                  if (
                    this.name.match(/^\.{0,2}[\\/]/) ||
                    m.cS.isAbsolute(this.name)
                  ) {
                    const o = m.y1.resolve(
                      this.context.cwd,
                      m.cS.toPortablePath(this.name)
                    )
                    t.reportInfo(
                      u.b.UNNAMED,
                      'Reading ' + B.pretty(e, o, B.Type.PATH)
                    ),
                      (A = m.y1.relative(r.cwd, o)),
                      (n = await y.xfs.readFilePromise(o))
                  } else {
                    let r
                    if (this.name.match(/^https?:/)) {
                      try {
                        new Ne.URL(this.name)
                      } catch (e) {
                        throw new X.lk(
                          u.b.INVALID_PLUGIN_REFERENCE,
                          `Plugin specifier "${this.name}" is neither a plugin name nor a valid url`
                        )
                      }
                      ;(A = this.name), (r = this.name)
                    } else {
                      const t = d.parseIdent(
                          this.name.replace(
                            /^((@yarnpkg\/)?plugin-)?/,
                            '@yarnpkg/plugin-'
                          )
                        ),
                        n = d.stringifyIdent(t),
                        o = await Ke(e)
                      if (!Object.prototype.hasOwnProperty.call(o, n))
                        throw new X.lk(
                          u.b.PLUGIN_NAME_NOT_FOUND,
                          `Couldn't find a plugin named "${n}" on the remote registry. Note that only the plugins referenced on our website (https://github.com/yarnpkg/berry/blob/master/plugins.yml) can be referenced by their name; any other plugin will have to be referenced through its public url (for example https://github.com/yarnpkg/berry/raw/master/packages/plugin-typescript/bin/%40yarnpkg/plugin-typescript.js).`
                        )
                      ;(A = n), (r = o[n].url)
                    }
                    t.reportInfo(
                      u.b.UNNAMED,
                      'Downloading ' + B.pretty(e, r, 'green')
                    ),
                      (n = await me.get(r, { configuration: e }))
                  }
                  await xe(A, n, { project: r, report: t })
                }
              )
            ).exitCode()
          }
        }
        async function xe(e, t, { project: r, report: A }) {
          const { configuration: n } = r,
            o = {},
            i = { exports: o }
          ;(0, Fe.runInNewContext)(t.toString(), { module: i, exports: o })
          const a = i.exports.name,
            c = `.yarn/plugins/${a}.cjs`,
            g = m.y1.resolve(r.cwd, c)
          A.reportInfo(
            u.b.UNNAMED,
            'Saving the new plugin in ' + B.pretty(n, c, 'magenta')
          ),
            await y.xfs.mkdirPromise(m.y1.dirname(g), { recursive: !0 }),
            await y.xfs.writeFilePromise(g, t)
          const l = { path: c, spec: e }
          await s.VK.updateConfiguration(r.cwd, e => {
            const t = []
            let A = !1
            for (const n of e.plugins || []) {
              const e = 'string' != typeof n ? n.path : n,
                o = m.y1.resolve(r.cwd, m.cS.toPortablePath(e)),
                { name: i } = P.dynamicRequire(m.cS.fromPortablePath(o))
              i !== a ? t.push(n) : (t.push(l), (A = !0))
            }
            return A || t.push(l), { ...e, plugins: t }
          })
        }
        ;(Re.usage = C.Command.Usage({
          category: 'Plugin-related commands',
          description: 'download a plugin',
          details:
            "\n      This command downloads the specified plugin from its remote location and updates the configuration to reference it in further CLI invocations.\n\n      Three types of plugin references are accepted:\n\n      - If the plugin is stored within the Yarn repository, it can be referenced by name.\n      - Third-party plugins can be referenced directly through their public urls.\n      - Local plugins can be referenced by their path on the disk.\n\n      Plugins cannot be downloaded from the npm registry, and aren't allowed to have dependencies (they need to be bundled into a single file, possibly thanks to the `@yarnpkg/builder` package).\n    ",
          examples: [
            [
              'Download and activate the "@yarnpkg/plugin-exec" plugin',
              '$0 plugin import @yarnpkg/plugin-exec',
            ],
            [
              'Download and activate the "@yarnpkg/plugin-exec" plugin (shorthand)',
              '$0 plugin import exec',
            ],
            [
              'Download and activate a community plugin',
              '$0 plugin import https://example.org/path/to/plugin.js',
            ],
            ['Activate a local plugin', '$0 plugin import ./path/to/plugin.js'],
          ],
        })),
          (0, a.gn)([C.Command.String()], Re.prototype, 'name', void 0),
          (0, a.gn)(
            [C.Command.Path('plugin', 'import')],
            Re.prototype,
            'execute',
            null
          )
        class Le extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.repository = 'https://github.com/yarnpkg/berry.git'),
              (this.branch = 'master'),
              (this.noMinify = !1),
              (this.force = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              t =
                void 0 !== this.installPath
                  ? m.y1.resolve(
                      this.context.cwd,
                      m.cS.toPortablePath(this.installPath)
                    )
                  : m.y1.resolve(
                      m.cS.toPortablePath((0, Ee.tmpdir)()),
                      'yarnpkg-sources',
                      Ie.makeHash(this.repository).slice(0, 6)
                    )
            return (
              await p.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async r => {
                  const { project: A } = await h.I.find(e, this.context.cwd),
                    n = d.parseIdent(
                      this.name.replace(
                        /^((@yarnpkg\/)?plugin-)?/,
                        '@yarnpkg/plugin-'
                      )
                    ),
                    o = d.stringifyIdent(n),
                    i = await Ke(e)
                  if (!Object.prototype.hasOwnProperty.call(i, o))
                    throw new X.lk(
                      u.b.PLUGIN_NAME_NOT_FOUND,
                      `Couldn't find a plugin named "${o}" on the remote registry. Note that only the plugins referenced on our website (https://github.com/yarnpkg/berry/blob/master/plugins.yml) can be built and imported from sources.`
                    )
                  const s = o,
                    a = s.replace(/@yarnpkg\//, '')
                  await ke(this, { configuration: e, report: r, target: t }),
                    r.reportSeparator(),
                    r.reportInfo(u.b.UNNAMED, 'Building a fresh ' + a),
                    r.reportSeparator(),
                    await Se(
                      (({ pluginName: e, noMinify: t }, r) => [
                        [
                          'yarn',
                          'build:' + e,
                          ...(t ? ['--no-minify'] : []),
                          '|',
                        ],
                      ])({ pluginName: a, noMinify: this.noMinify }),
                      { configuration: e, context: this.context, target: t }
                    ),
                    r.reportSeparator()
                  const c = m.y1.resolve(t, `packages/${a}/bundles/${s}.js`),
                    g = await y.xfs.readFilePromise(c)
                  await xe(s, g, { project: A, report: r })
                }
              )
            ).exitCode()
          }
        }
        ;(Le.usage = C.Command.Usage({
          category: 'Plugin-related commands',
          description: 'build a plugin from sources',
          details:
            '\n      This command clones the Yarn repository into a temporary folder, builds the specified contrib plugin and updates the configuration to reference it in further CLI invocations.\n\n      The plugins can be referenced by their short name if sourced from the official Yarn repository.\n    ',
          examples: [
            [
              'Build and activate the "@yarnpkg/plugin-exec" plugin',
              '$0 plugin import from sources @yarnpkg/plugin-exec',
            ],
            [
              'Build and activate the "@yarnpkg/plugin-exec" plugin (shorthand)',
              '$0 plugin import from sources exec',
            ],
          ],
        })),
          (0, a.gn)([C.Command.String()], Le.prototype, 'name', void 0),
          (0, a.gn)(
            [
              C.Command.String('--path', {
                description:
                  'The path where the repository should be cloned to',
              }),
            ],
            Le.prototype,
            'installPath',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.String('--repository', {
                description: 'The repository that should be cloned',
              }),
            ],
            Le.prototype,
            'repository',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.String('--branch', {
                description:
                  'The branch of the repository that should be cloned',
              }),
            ],
            Le.prototype,
            'branch',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--no-minify', {
                description:
                  'Build a plugin for development (debugging) - non-minified and non-mangled',
              }),
            ],
            Le.prototype,
            'noMinify',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('-f,--force', {
                description:
                  'Always clone the repository instead of trying to fetch the latest commits',
              }),
            ],
            Le.prototype,
            'force',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path('plugin', 'import', 'from', 'sources')],
            Le.prototype,
            'execute',
            null
          )
        class Pe extends c.BaseCommand {
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t } = await h.I.find(e, this.context.cwd)
            return (
              await p.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async r => {
                  const A = this.name,
                    n = d.parseIdent(A)
                  if (!e.plugins.has(A))
                    throw new C.UsageError(
                      d.prettyIdent(e, n) +
                        " isn't referenced by the current configuration"
                    )
                  const o = `.yarn/plugins/${A}.cjs`,
                    i = m.y1.resolve(t.cwd, o)
                  y.xfs.existsSync(i) &&
                    (r.reportInfo(
                      u.b.UNNAMED,
                      `Removing ${B.pretty(e, o, B.Type.PATH)}...`
                    ),
                    await y.xfs.removePromise(i)),
                    r.reportInfo(u.b.UNNAMED, 'Updating the configuration...'),
                    await s.VK.updateConfiguration(t.cwd, e => {
                      if (!Array.isArray(e.plugins)) return e
                      const t = e.plugins.filter(e => e.path !== o)
                      return e.plugins.length === t.length
                        ? e
                        : { ...e, plugins: t }
                    })
                }
              )
            ).exitCode()
          }
        }
        ;(Pe.usage = C.Command.Usage({
          category: 'Plugin-related commands',
          description: 'remove a plugin',
          details:
            '\n      This command deletes the specified plugin from the .yarn/plugins folder and removes it from the configuration.\n\n      **Note:** The plugins have to be referenced by their name property, which can be obtained using the `yarn plugin runtime` command. Shorthands are not allowed.\n   ',
          examples: [
            [
              'Remove a plugin imported from the Yarn repository',
              '$0 plugin remove @yarnpkg/plugin-typescript',
            ],
            [
              'Remove a plugin imported from a local file',
              '$0 plugin remove my-local-plugin',
            ],
          ],
        })),
          (0, a.gn)([C.Command.String()], Pe.prototype, 'name', void 0),
          (0, a.gn)(
            [C.Command.Path('plugin', 'remove')],
            Pe.prototype,
            'execute',
            null
          )
        class Oe extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.json = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins)
            return (
              await p.Pk.start(
                {
                  configuration: e,
                  json: this.json,
                  stdout: this.context.stdout,
                },
                async t => {
                  for (const r of e.plugins.keys()) {
                    const e = this.context.plugins.plugins.has(r)
                    let A = r
                    e && (A += ' [builtin]'),
                      t.reportJson({ name: r, builtin: e }),
                      t.reportInfo(null, '' + A)
                  }
                }
              )
            ).exitCode()
          }
        }
        ;(Oe.usage = C.Command.Usage({
          category: 'Plugin-related commands',
          description: 'list the active plugins',
          details:
            '\n      This command prints the currently active plugins. Will be displayed both builtin plugins and external plugins.\n    ',
          examples: [
            ['List the currently active plugins', '$0 plugin runtime'],
          ],
        })),
          (0, a.gn)(
            [
              C.Command.Boolean('--json', {
                description: 'Format the output as an NDJSON stream',
              }),
            ],
            Oe.prototype,
            'json',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path('plugin', 'runtime')],
            Oe.prototype,
            'execute',
            null
          )
        class Ue extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.idents = [])
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(
                e,
                this.context.cwd
              ),
              A = await g.C.find(e)
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd)
            const n = new Set()
            for (const e of this.idents) n.add(d.parseIdent(e).identHash)
            await t.resolveEverything({ cache: A, report: new I.$() })
            const o = e.get('bstatePath'),
              i = y.xfs.existsSync(o)
                ? (0, he.parseSyml)(await y.xfs.readFilePromise(o, 'utf8'))
                : {},
              a = new Map()
            for (const e of t.storedPackages.values()) {
              if (!Object.prototype.hasOwnProperty.call(i, e.locatorHash))
                continue
              if (0 === n.size || n.has(e.identHash)) continue
              const t = i[e.locatorHash]
              a.set(e.locatorHash, t)
            }
            if (a.size > 0) {
              const r = e.get('bstatePath'),
                A = h.I.generateBuildStateFile(a, t.storedPackages)
              await y.xfs.mkdirPromise(m.y1.dirname(r), { recursive: !0 }),
                await y.xfs.changeFilePromise(r, A, { automaticNewlines: !0 })
            } else await y.xfs.removePromise(o)
            return (
              await p.Pk.start(
                {
                  configuration: e,
                  stdout: this.context.stdout,
                  includeLogs: !this.context.quiet,
                },
                async e => {
                  await t.install({ cache: A, report: e })
                }
              )
            ).exitCode()
          }
        }
        ;(Ue.usage = C.Command.Usage({
          description: "rebuild the project's native packages",
          details:
            "\n      This command will automatically cause Yarn to forget about previous compilations of the given packages and to run them again.\n\n      Note that while Yarn forgets the compilation, the previous artifacts aren't erased from the filesystem and may affect the next builds (in good or bad). To avoid this, you may remove the .yarn/unplugged folder, or any other relevant location where packages might have been stored (Yarn may offer a way to do that automatically in the future).\n\n      By default all packages will be rebuilt, but you can filter the list by specifying the names of the packages you want to clear from memory.\n    ",
          examples: [
            ['Rebuild all packages', '$0 rebuild'],
            ['Rebuild fsevents only', '$0 rebuild fsevents'],
          ],
        })),
          (0, a.gn)([C.Command.Rest()], Ue.prototype, 'idents', void 0),
          (0, a.gn)([C.Command.Path('rebuild')], Ue.prototype, 'execute', null)
        class Te extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.all = !1), (this.patterns = [])
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(
                e,
                this.context.cwd
              ),
              A = await g.C.find(e)
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd)
            await t.restoreInstallState({ restoreResolutions: !1 })
            const o = this.all ? t.workspaces : [r],
              i = [n.REGULAR, n.DEVELOPMENT, n.PEER],
              a = []
            let l = !1
            const u = []
            for (const e of this.patterns) {
              let t = !1
              const r = d.parseIdent(e)
              for (const A of o) {
                const n = [...A.manifest.peerDependenciesMeta.keys()]
                for (const r of Z()(n, e))
                  A.manifest.peerDependenciesMeta.delete(r), (l = !0), (t = !0)
                for (const e of i) {
                  const n = A.manifest.getForScope(e),
                    o = [...n.values()].map(e => d.stringifyIdent(e))
                  for (const i of Z()(o, d.stringifyIdent(r))) {
                    const { identHash: r } = d.parseIdent(i),
                      o = n.get(r)
                    if (void 0 === o)
                      throw new Error(
                        'Assertion failed: Expected the descriptor to be registered'
                      )
                    A.manifest[e].delete(r),
                      u.push([A, e, o]),
                      (l = !0),
                      (t = !0)
                  }
                }
              }
              t || a.push(e)
            }
            const f = a.length > 1 ? 'Patterns' : 'Pattern',
              I = a.length > 1 ? "don't" : "doesn't",
              E = this.all ? 'any' : 'this'
            if (a.length > 0)
              throw new C.UsageError(
                `${f} ${B.prettyList(
                  e,
                  a,
                  s.a5.CODE
                )} ${I} match any packages referenced by ${E} workspace`
              )
            if (l) {
              await e.triggerMultipleHooks(
                e => e.afterWorkspaceDependencyRemoval,
                u
              )
              return (
                await p.Pk.start(
                  { configuration: e, stdout: this.context.stdout },
                  async e => {
                    await t.install({ cache: A, report: e })
                  }
                )
              ).exitCode()
            }
            return 0
          }
        }
        ;(Te.usage = C.Command.Usage({
          description: 'remove dependencies from the project',
          details:
            '\n      This command will remove the packages matching the specified patterns from the current workspace.\n\n      This command accepts glob patterns as arguments (if valid Idents and supported by [micromatch](https://github.com/micromatch/micromatch)). Make sure to escape the patterns, to prevent your own shell from trying to expand them.\n    ',
          examples: [
            [
              'Remove a dependency from the current project',
              '$0 remove lodash',
            ],
            [
              'Remove a dependency from all workspaces at once',
              '$0 remove lodash --all',
            ],
            [
              'Remove all dependencies starting with `eslint-`',
              "$0 remove 'eslint-*'",
            ],
            [
              'Remove all dependencies with the `@babel` scope',
              "$0 remove '@babel/*'",
            ],
            [
              'Remove all dependencies matching `react-dom` or `react-helmet`',
              "$0 remove 'react-{dom,helmet}'",
            ],
          ],
        })),
          (0, a.gn)(
            [
              C.Command.Boolean('-A,--all', {
                description:
                  'Apply the operation to all workspaces from the current project',
              }),
            ],
            Te.prototype,
            'all',
            void 0
          ),
          (0, a.gn)([C.Command.Rest()], Te.prototype, 'patterns', void 0),
          (0, a.gn)([C.Command.Path('remove')], Te.prototype, 'execute', null)
        class je extends c.BaseCommand {
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(e, this.context.cwd)
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd)
            return (
              await p.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async t => {
                  const A = r.manifest.scripts,
                    n = P.sortMap(A.keys(), e => e),
                    o = {
                      breakLength: 1 / 0,
                      colors: e.get('enableColors'),
                      maxArrayLength: 2,
                    },
                    i = n.reduce((e, t) => Math.max(e, t.length), 0)
                  for (const [e, r] of A.entries())
                    t.reportInfo(
                      null,
                      `${e.padEnd(i, ' ')}   ${(0, T.inspect)(r, o)}`
                    )
                }
              )
            ).exitCode()
          }
        }
        ;(0, a.gn)([C.Command.Path('run')], je.prototype, 'execute', null)
        class Ye extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.inspect = !1),
              (this.inspectBrk = !1),
              (this.topLevel = !1),
              (this.binariesOnly = !1),
              (this.args = [])
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r, locator: A } = await h.I.find(
                e,
                this.context.cwd
              )
            await t.restoreInstallState()
            const n = this.topLevel ? t.topLevelWorkspace.anchoredLocator : A
            if (
              !this.binariesOnly &&
              (await R.hasPackageScript(n, this.scriptName, { project: t }))
            )
              return await R.executePackageScript(
                n,
                this.scriptName,
                this.args,
                {
                  project: t,
                  stdin: this.context.stdin,
                  stdout: this.context.stdout,
                  stderr: this.context.stderr,
                }
              )
            if (
              (await R.getPackageAccessibleBinaries(n, { project: t })).get(
                this.scriptName
              )
            ) {
              const e = []
              return (
                this.inspect &&
                  ('string' == typeof this.inspect
                    ? e.push('--inspect=' + this.inspect)
                    : e.push('--inspect')),
                this.inspectBrk &&
                  ('string' == typeof this.inspectBrk
                    ? e.push('--inspect-brk=' + this.inspectBrk)
                    : e.push('--inspect-brk')),
                await R.executePackageAccessibleBinary(
                  n,
                  this.scriptName,
                  this.args,
                  {
                    cwd: this.context.cwd,
                    project: t,
                    stdin: this.context.stdin,
                    stdout: this.context.stdout,
                    stderr: this.context.stderr,
                    nodeArgs: e,
                  }
                )
              )
            }
            if (
              !this.topLevel &&
              !this.binariesOnly &&
              r &&
              this.scriptName.includes(':')
            ) {
              const e = (
                await Promise.all(
                  t.workspaces.map(async e =>
                    e.manifest.scripts.has(this.scriptName) ? e : null
                  )
                )
              ).filter(e => null !== e)
              if (1 === e.length)
                return await R.executeWorkspaceScript(
                  e[0],
                  this.scriptName,
                  this.args,
                  {
                    stdin: this.context.stdin,
                    stdout: this.context.stdout,
                    stderr: this.context.stderr,
                  }
                )
            }
            if (this.topLevel)
              throw 'node-gyp' === this.scriptName
                ? new C.UsageError(
                    `Couldn't find a script name "${
                      this.scriptName
                    }" in the top-level (used by ${d.prettyLocator(
                      e,
                      A
                    )}). This typically happens because some package depends on "node-gyp" to build itself, but didn't list it in their dependencies. To fix that, please run "yarn add node-gyp" into your top-level workspace. You also can open an issue on the repository of the specified package to suggest them to use an optional peer dependency.`
                  )
                : new C.UsageError(
                    `Couldn't find a script name "${
                      this.scriptName
                    }" in the top-level (used by ${d.prettyLocator(e, A)}).`
                  )
            {
              if ('global' === this.scriptName)
                throw new C.UsageError(
                  "The 'yarn global' commands have been removed in 2.x - consider using 'yarn dlx' or a third-party plugin instead"
                )
              const e = [this.scriptName].concat(this.args)
              for (const [t, r] of c.pluginCommands)
                for (const A of r)
                  if (
                    e.length >= A.length &&
                    JSON.stringify(e.slice(0, A.length)) === JSON.stringify(A)
                  )
                    throw new C.UsageError(
                      `Couldn't find a script named "${this.scriptName}", but a matching command can be found in the ${t} plugin. You can install it with "yarn plugin import ${t}".`
                    )
              throw new C.UsageError(
                `Couldn't find a script named "${this.scriptName}".`
              )
            }
          }
        }
        ;(Ye.usage = C.Command.Usage({
          description: 'run a script defined in the package.json',
          details:
            "\n      This command will run a tool. The exact tool that will be executed will depend on the current state of your workspace:\n\n      - If the `scripts` field from your local package.json contains a matching script name, its definition will get executed.\n\n      - Otherwise, if one of the local workspace's dependencies exposes a binary with a matching name, this binary will get executed.\n\n      - Otherwise, if the specified name contains a colon character and if one of the workspaces in the project contains exactly one script with a matching name, then this script will get executed.\n\n      Whatever happens, the cwd of the spawned process will be the workspace that declares the script (which makes it possible to call commands cross-workspaces using the third syntax).\n    ",
          examples: [
            ['Run the tests from the local workspace', '$0 run test'],
            ['Same thing, but without the "run" keyword', '$0 test'],
            ['Inspect Webpack while running', '$0 run --inspect-brk webpack'],
          ],
        })),
          (0, a.gn)(
            [
              C.Command.String('--inspect', {
                tolerateBoolean: !0,
                description:
                  'Forwarded to the underlying Node process when executing a binary',
              }),
            ],
            Ye.prototype,
            'inspect',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.String('--inspect-brk', {
                tolerateBoolean: !0,
                description:
                  'Forwarded to the underlying Node process when executing a binary',
              }),
            ],
            Ye.prototype,
            'inspectBrk',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean('-T,--top-level', { hidden: !0 })],
            Ye.prototype,
            'topLevel',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean('-B,--binaries-only', { hidden: !0 })],
            Ye.prototype,
            'binariesOnly',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Boolean('--silent', { hidden: !0 })],
            Ye.prototype,
            'silent',
            void 0
          ),
          (0, a.gn)([C.Command.String()], Ye.prototype, 'scriptName', void 0),
          (0, a.gn)([C.Command.Proxy()], Ye.prototype, 'args', void 0),
          (0, a.gn)([C.Command.Path('run')], Ye.prototype, 'execute', null)
        class Ge extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.save = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(
                e,
                this.context.cwd
              ),
              A = await g.C.find(e)
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd)
            const n = d.parseDescriptor(this.descriptor, !0),
              o = d.makeDescriptor(n, this.resolution)
            t.storedDescriptors.set(n.descriptorHash, n),
              t.storedDescriptors.set(o.descriptorHash, o),
              t.resolutionAliases.set(n.descriptorHash, o.descriptorHash)
            return (
              await p.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async e => {
                  await t.install({ cache: A, report: e })
                }
              )
            ).exitCode()
          }
        }
        ;(Ge.usage = C.Command.Usage({
          description: 'enforce a package resolution',
          details:
            '\n      This command updates the resolution table so that `descriptor` is resolved by `resolution`.\n\n      Note that by default this command only affect the current resolution table - meaning that this "manual override" will disappear if you remove the lockfile, or if the package disappear from the table. If you wish to make the enforced resolution persist whatever happens, add the `-s,--save` flag which will also edit the `resolutions` field from your top-level manifest.\n\n      Note that no attempt is made at validating that `resolution` is a valid resolution entry for `descriptor`.\n    ',
          examples: [
            [
              'Force all instances of lodash@npm:^1.2.3 to resolve to 1.5.0',
              '$0 set resolution lodash@npm:^1.2.3 1.5.0',
            ],
          ],
        })),
          (0, a.gn)([C.Command.String()], Ge.prototype, 'descriptor', void 0),
          (0, a.gn)([C.Command.String()], Ge.prototype, 'resolution', void 0),
          (0, a.gn)(
            [
              C.Command.Boolean('-s,--save', {
                description:
                  'Persist the resolution inside the top-level manifest',
              }),
            ],
            Ge.prototype,
            'save',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path('set', 'resolution')],
            Ge.prototype,
            'execute',
            null
          )
        class He extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.patterns = []),
              (this.interactive = null),
              (this.exact = !1),
              (this.tilde = !1),
              (this.caret = !1)
          }
          async execute() {
            var e
            const t = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: r, workspace: A } = await h.I.find(
                t,
                this.context.cwd
              ),
              o = await g.C.find(t)
            if (!A) throw new c.WorkspaceRequiredError(r.cwd, this.context.cwd)
            const a =
                null !== (e = this.interactive) && void 0 !== e
                  ? e
                  : t.get('preferInteractive'),
              I = D(this, r),
              E = a
                ? [i.KEEP, i.REUSE, i.PROJECT, i.LATEST]
                : [i.PROJECT, i.LATEST],
              y = [],
              m = []
            for (const e of this.patterns) {
              let t = !1
              const A = d.parseDescriptor(e)
              for (const e of r.workspaces)
                for (const i of [n.REGULAR, n.DEVELOPMENT]) {
                  const n = [...e.manifest.getForScope(i).values()].map(e =>
                    d.stringifyIdent(e)
                  )
                  for (const s of Z()(n, d.stringifyIdent(A))) {
                    const n = d.parseIdent(s),
                      a = e.manifest[i].get(n.identHash)
                    if (void 0 === a)
                      throw new Error(
                        'Assertion failed: Expected the descriptor to be registered'
                      )
                    const c = d.makeDescriptor(n, A.range)
                    y.push(
                      Promise.resolve().then(async () => [
                        e,
                        i,
                        a,
                        await F(c, {
                          project: r,
                          workspace: e,
                          cache: o,
                          target: i,
                          modifier: I,
                          strategies: E,
                        }),
                      ])
                    ),
                      (t = !0)
                  }
                }
              t || m.push(e)
            }
            if (m.length > 1)
              throw new C.UsageError(
                `Patterns ${B.prettyList(
                  t,
                  m,
                  s.a5.CODE
                )} don't match any packages referenced by any workspace`
              )
            if (m.length > 0)
              throw new C.UsageError(
                `Pattern ${B.prettyList(
                  t,
                  m,
                  s.a5.CODE
                )} doesn't match any packages referenced by any workspace`
              )
            const w = await Promise.all(y),
              Q = await l.h.start(
                {
                  configuration: t,
                  stdout: this.context.stdout,
                  suggestInstall: !1,
                },
                async e => {
                  for (const [, , A, { suggestions: n, rejections: o }] of w) {
                    const i = n.filter(e => null !== e.descriptor)
                    if (0 === i.length) {
                      const [n] = o
                      if (void 0 === n)
                        throw new Error(
                          'Assertion failed: Expected an error to have been set'
                        )
                      const i = this.cli.error(n)
                      r.configuration.get('enableNetwork')
                        ? e.reportError(
                            u.b.CANT_SUGGEST_RESOLUTIONS,
                            `${d.prettyDescriptor(
                              t,
                              A
                            )} can't be resolved to a satisfying range\n\n${i}`
                          )
                        : e.reportError(
                            u.b.CANT_SUGGEST_RESOLUTIONS,
                            `${d.prettyDescriptor(
                              t,
                              A
                            )} can't be resolved to a satisfying range (note: network resolution has been disabled)\n\n${i}`
                          )
                    } else
                      i.length > 1 &&
                        !a &&
                        e.reportError(
                          u.b.CANT_SUGGEST_RESOLUTIONS,
                          d.prettyDescriptor(t, A) +
                            ' has multiple possible upgrade strategies; use -i to disambiguate manually'
                        )
                  }
                }
              )
            if (Q.hasErrors()) return Q.exitCode()
            let b = !1
            const v = []
            for (const [e, A, , { suggestions: n }] of w) {
              let o
              const i = n.filter(e => null !== e.descriptor),
                s = i[0].descriptor,
                a = i.every(e => d.areDescriptorsEqual(e.descriptor, s))
              1 === i.length || a
                ? (o = s)
                : ((b = !0),
                  ({ answer: o } = await (0, f.prompt)({
                    type: 'select',
                    name: 'answer',
                    message: `Which range to you want to use in ${d.prettyWorkspace(
                      t,
                      e
                    )} ❯ ${A}?`,
                    choices: n.map(({ descriptor: e, name: t, reason: r }) =>
                      e
                        ? { name: t, hint: r, descriptor: e }
                        : { name: t, hint: r, disabled: !0 }
                    ),
                    onCancel: () => process.exit(130),
                    result(e) {
                      return this.find(e, 'descriptor')
                    },
                    stdin: this.context.stdin,
                    stdout: this.context.stdout,
                  })))
              const c = e.manifest[A].get(o.identHash)
              if (void 0 === c)
                throw new Error(
                  'Assertion failed: This descriptor should have a matching entry'
                )
              if (c.descriptorHash !== o.descriptorHash)
                e.manifest[A].set(o.identHash, o), v.push([e, A, c, o])
              else {
                const A = t.makeResolver(),
                  n = { project: r, resolver: A },
                  o = A.bindDescriptor(c, e.anchoredLocator, n)
                r.forgetResolution(o)
              }
            }
            await t.triggerMultipleHooks(
              e => e.afterWorkspaceDependencyReplacement,
              v
            ),
              b && this.context.stdout.write('\n')
            return (
              await p.Pk.start(
                { configuration: t, stdout: this.context.stdout },
                async e => {
                  await r.install({ cache: o, report: e })
                }
              )
            ).exitCode()
          }
        }
        ;(He.usage = C.Command.Usage({
          description: 'upgrade dependencies across the project',
          details:
            "\n      This command upgrades the packages matching the list of specified patterns to their latest available version across the whole project (regardless of whether they're part of `dependencies` or `devDependencies` - `peerDependencies` won't be affected). This is a project-wide command: all workspaces will be upgraded in the process.\n\n      If `-i,--interactive` is set (or if the `preferInteractive` settings is toggled on) the command will offer various choices, depending on the detected upgrade paths. Some upgrades require this flag in order to resolve ambiguities.\n\n      The, `-C,--caret`, `-E,--exact` and  `-T,--tilde` options have the same meaning as in the `add` command (they change the modifier used when the range is missing or a tag, and are ignored when the range is explicitly set).\n\n      Generally you can see `yarn up` as a counterpart to what was `yarn upgrade --latest` in Yarn 1 (ie it ignores the ranges previously listed in your manifests), but unlike `yarn upgrade` which only upgraded dependencies in the current workspace, `yarn up` will upgrade all workspaces at the same time.\n\n      This command accepts glob patterns as arguments (if valid Descriptors and supported by [micromatch](https://github.com/micromatch/micromatch)). Make sure to escape the patterns, to prevent your own shell from trying to expand them.\n\n      **Note:** The ranges have to be static, only the package scopes and names can contain glob patterns.\n    ",
          examples: [
            [
              'Upgrade all instances of lodash to the latest release',
              '$0 up lodash',
            ],
            [
              'Upgrade all instances of lodash to the latest release, but ask confirmation for each',
              '$0 up lodash -i',
            ],
            ['Upgrade all instances of lodash to 1.2.3', '$0 up lodash@1.2.3'],
            [
              'Upgrade all instances of packages with the `@babel` scope to the latest release',
              "$0 up '@babel/*'",
            ],
            [
              'Upgrade all instances of packages containing the word `jest` to the latest release',
              "$0 up '*jest*'",
            ],
            [
              'Upgrade all instances of packages with the `@babel` scope to 7.0.0',
              "$0 up '@babel/*@7.0.0'",
            ],
          ],
        })),
          (0, a.gn)([C.Command.Rest()], He.prototype, 'patterns', void 0),
          (0, a.gn)(
            [
              C.Command.Boolean('-i,--interactive', {
                description:
                  'Offer various choices, depending on the detected upgrade paths',
              }),
            ],
            He.prototype,
            'interactive',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('-E,--exact', {
                description:
                  "Don't use any semver modifier on the resolved range",
              }),
            ],
            He.prototype,
            'exact',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('-T,--tilde', {
                description:
                  'Use the `~` semver modifier on the resolved range',
              }),
            ],
            He.prototype,
            'tilde',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('-C,--caret', {
                description:
                  'Use the `^` semver modifier on the resolved range',
              }),
            ],
            He.prototype,
            'caret',
            void 0
          ),
          (0, a.gn)([C.Command.Path('up')], He.prototype, 'execute', null)
        class Je extends c.BaseCommand {
          constructor() {
            super(...arguments),
              (this.recursive = !1),
              (this.json = !1),
              (this.peers = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(e, this.context.cwd)
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd)
            await t.restoreInstallState()
            const A = d.parseIdent(this.package).identHash,
              n = this.recursive
                ? (function (e, t, { configuration: r, peers: A }) {
                    const n = P.sortMap(e.workspaces, e =>
                        d.stringifyLocator(e.anchoredLocator)
                      ),
                      o = new Set(),
                      i = new Set(),
                      s = r => {
                        if (o.has(r.locatorHash)) return i.has(r.locatorHash)
                        if ((o.add(r.locatorHash), r.identHash === t))
                          return i.add(r.locatorHash), !0
                        let n = !1
                        r.identHash === t && (n = !0)
                        for (const t of r.dependencies.values()) {
                          if (!A && r.peerDependencies.has(t.identHash))
                            continue
                          const o = e.storedResolutions.get(t.descriptorHash)
                          if (!o)
                            throw new Error(
                              'Assertion failed: The resolution should have been registered'
                            )
                          const i = e.storedPackages.get(o)
                          if (!i)
                            throw new Error(
                              'Assertion failed: The package should have been registered'
                            )
                          s(i) && (n = !0)
                        }
                        return n && i.add(r.locatorHash), n
                      }
                    for (const t of n) {
                      const r = e.storedPackages.get(
                        t.anchoredLocator.locatorHash
                      )
                      if (!r)
                        throw new Error(
                          'Assertion failed: The package should have been registered'
                        )
                      s(r)
                    }
                    const a = new Set(),
                      c = {},
                      g = { children: c },
                      l = (t, r, n) => {
                        if (!i.has(t.locatorHash)) return
                        const o = {},
                          s = {
                            value:
                              null !== n
                                ? B.tuple(B.Type.DEPENDENT, {
                                    locator: t,
                                    descriptor: n,
                                  })
                                : B.tuple(B.Type.LOCATOR, t),
                            children: o,
                          }
                        if (
                          ((r[d.stringifyLocator(t)] = s),
                          !a.has(t.locatorHash) &&
                            (a.add(t.locatorHash),
                            null === n || !e.tryWorkspaceByLocator(t)))
                        )
                          for (const r of t.dependencies.values()) {
                            if (!A && t.peerDependencies.has(r.identHash))
                              continue
                            const n = e.storedResolutions.get(r.descriptorHash)
                            if (!n)
                              throw new Error(
                                'Assertion failed: The resolution should have been registered'
                              )
                            const i = e.storedPackages.get(n)
                            if (!i)
                              throw new Error(
                                'Assertion failed: The package should have been registered'
                              )
                            l(i, o, r)
                          }
                      }
                    for (const t of n) {
                      const r = e.storedPackages.get(
                        t.anchoredLocator.locatorHash
                      )
                      if (!r)
                        throw new Error(
                          'Assertion failed: The package should have been registered'
                        )
                      l(r, c, null)
                    }
                    return g
                  })(t, A, { configuration: e, peers: this.peers })
                : (function (e, t, { configuration: r, peers: A }) {
                    const n = P.sortMap(e.storedPackages.values(), e =>
                        d.stringifyLocator(e)
                      ),
                      o = {},
                      i = { children: o }
                    for (const r of n) {
                      const n = {},
                        i = null
                      for (const s of r.dependencies.values()) {
                        if (!A && r.peerDependencies.has(s.identHash)) continue
                        const a = e.storedResolutions.get(s.descriptorHash)
                        if (!a)
                          throw new Error(
                            'Assertion failed: The resolution should have been registered'
                          )
                        const c = e.storedPackages.get(a)
                        if (!c)
                          throw new Error(
                            'Assertion failed: The package should have been registered'
                          )
                        if (c.identHash !== t) continue
                        if (null === i) {
                          const e = d.stringifyLocator(r)
                          o[e] = { value: [r, B.Type.LOCATOR], children: n }
                        }
                        const g = d.stringifyLocator(c)
                        n[g] = {
                          value: [
                            { descriptor: s, locator: c },
                            B.Type.DEPENDENT,
                          ],
                        }
                      }
                    }
                    return i
                  })(t, A, { configuration: e, peers: this.peers })
            le.emitTree(n, {
              configuration: e,
              stdout: this.context.stdout,
              json: this.json,
              separators: 1,
            })
          }
        }
        ;(Je.usage = C.Command.Usage({
          description: 'display the reason why a package is needed',
          details:
            '\n      This command prints the exact reasons why a package appears in the dependency tree.\n\n      If `-R,--recursive` is set, the listing will go in depth and will list, for each workspaces, what are all the paths that lead to the dependency. Note that the display is somewhat optimized in that it will not print the package listing twice for a single package, so if you see a leaf named "Foo" when looking for "Bar", it means that "Foo" already got printed higher in the tree.\n    ',
          examples: [
            ['Explain why lodash is used in your project', '$0 why lodash'],
          ],
        })),
          (0, a.gn)([C.Command.String()], Je.prototype, 'package', void 0),
          (0, a.gn)(
            [
              C.Command.Boolean('-R,--recursive', {
                description:
                  'List, for each workspace, what are all the paths that lead to the dependency',
              }),
            ],
            Je.prototype,
            'recursive',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--json', {
                description: 'Format the output as an NDJSON stream',
              }),
            ],
            Je.prototype,
            'json',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--peers', {
                description:
                  'Also print the peer dependencies that match the specified name',
              }),
            ],
            Je.prototype,
            'peers',
            void 0
          ),
          (0, a.gn)([C.Command.Path('why')], Je.prototype, 'execute', null)
        class qe extends c.BaseCommand {
          constructor() {
            super(...arguments), (this.verbose = !1), (this.json = !1)
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t } = await h.I.find(e, this.context.cwd)
            return (
              await p.Pk.start(
                {
                  configuration: e,
                  json: this.json,
                  stdout: this.context.stdout,
                },
                async e => {
                  for (const r of t.workspaces) {
                    const { manifest: A } = r
                    let n
                    if (this.verbose) {
                      const e = new Set(),
                        r = new Set()
                      for (const n of E.G.hardDependencies)
                        for (const [o, i] of A.getForScope(n)) {
                          const A = t.tryWorkspaceByDescriptor(i)
                          null === A
                            ? t.workspacesByIdent.has(o) && r.add(i)
                            : e.add(A)
                        }
                      n = {
                        workspaceDependencies: Array.from(e).map(
                          e => e.relativeCwd
                        ),
                        mismatchedWorkspaceDependencies: Array.from(r).map(e =>
                          d.stringifyDescriptor(e)
                        ),
                      }
                    }
                    e.reportInfo(null, '' + r.relativeCwd),
                      e.reportJson({
                        location: r.relativeCwd,
                        name: A.name ? d.stringifyIdent(A.name) : null,
                        ...n,
                      })
                  }
                }
              )
            ).exitCode()
          }
        }
        ;(qe.usage = C.Command.Usage({
          category: 'Workspace-related commands',
          description: 'list all available workspaces',
          details:
            '\n      This command will print the list of all workspaces in the project. If both the `-v,--verbose` and `--json` options are set, Yarn will also return the cross-dependencies between each workspaces (useful when you wish to automatically generate Buck / Bazel rules).\n    ',
        })),
          (0, a.gn)(
            [
              C.Command.Boolean('-v,--verbose', {
                description:
                  'Also return the cross-dependencies between workspaces',
              }),
            ],
            qe.prototype,
            'verbose',
            void 0
          ),
          (0, a.gn)(
            [
              C.Command.Boolean('--json', {
                description: 'Format the output as an NDJSON stream',
              }),
            ],
            qe.prototype,
            'json',
            void 0
          ),
          (0, a.gn)(
            [C.Command.Path('workspaces', 'list')],
            qe.prototype,
            'execute',
            null
          )
        class ze extends C.Command {
          constructor() {
            super(...arguments), (this.args = [])
          }
          async execute() {
            const e = await s.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await h.I.find(e, this.context.cwd)
            if (!r) throw new c.WorkspaceRequiredError(t.cwd, this.context.cwd)
            const A = t.workspaces,
              n = new Map(
                A.map(e => {
                  const t = d.convertToIdent(e.locator)
                  return [d.stringifyIdent(t), e]
                })
              ),
              o = n.get(this.workspaceName)
            if (void 0 === o) {
              const e = Array.from(n.keys()).sort()
              throw new C.UsageError(
                `Workspace '${
                  this.workspaceName
                }' not found. Did you mean any of the following:\n  - ${e.join(
                  '\n  - '
                )}?`
              )
            }
            return this.cli.run([this.commandName, ...this.args], {
              cwd: o.cwd,
            })
          }
        }
        ;(ze.usage = C.Command.Usage({
          category: 'Workspace-related commands',
          description: 'run a command within the specified workspace',
          details:
            '\n      This command will run a given sub-command on a single workspace.\n    ',
          examples: [
            [
              'Add a package to a single workspace',
              'yarn workspace components add -D react',
            ],
            [
              'Run build script on a single workspace',
              'yarn workspace components run build',
            ],
          ],
        })),
          (0, a.gn)(
            [C.Command.String()],
            ze.prototype,
            'workspaceName',
            void 0
          ),
          (0, a.gn)([C.Command.String()], ze.prototype, 'commandName', void 0),
          (0, a.gn)([C.Command.Proxy()], ze.prototype, 'args', void 0),
          (0, a.gn)(
            [C.Command.Path('workspace')],
            ze.prototype,
            'execute',
            null
          )
        const We = {
          configuration: {
            enableImmutableInstalls: {
              description:
                'If true, prevents the install command from modifying the lockfile',
              type: s.a2.BOOLEAN,
              default: !1,
            },
            defaultSemverRangePrefix: {
              description: "The default save prefix: '^', '~' or ''",
              type: s.a2.STRING,
              values: ['^', '~', ''],
              default: o.CARET,
            },
          },
          commands: [
            L,
            j,
            q,
            Ge,
            ve,
            we,
            qe,
            re,
            Ae,
            ne,
            ie,
            M,
            x,
            z,
            te,
            ae,
            ge,
            ue,
            de,
            Ce,
            fe,
            Le,
            Re,
            Pe,
            Me,
            Oe,
            Ue,
            Te,
            je,
            Ye,
            He,
            Je,
            ze,
          ],
        }
      },
      68023: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => E, fileUtils: () => A })
        var A = {}
        r.r(A),
          r.d(A, {
            makeArchiveFromLocator: () => p,
            makeBufferFromLocator: () => d,
            makeLocator: () => h,
            makeSpec: () => u,
            parseSpec: () => l,
          })
        var n = r(54143),
          o = r(46009)
        const i = /^(?:[a-zA-Z]:[\\/]|\.{0,2}\/)/,
          s = /^[^?]*\.(?:tar\.gz|tgz)(?:::.*)?$/
        var a = r(73632),
          c = r(72785),
          g = r(75448)
        function l(e) {
          const { params: t, selector: r } = n.parseRange(e),
            A = o.cS.toPortablePath(r)
          return {
            parentLocator:
              t && 'string' == typeof t.locator
                ? n.parseLocator(t.locator)
                : null,
            path: A,
          }
        }
        function u({ parentLocator: e, path: t, folderHash: r, protocol: A }) {
          const o = null !== e ? { locator: n.stringifyLocator(e) } : {},
            i = void 0 !== r ? { hash: r } : {}
          return n.makeRange({
            protocol: A,
            source: t,
            selector: t,
            params: { ...i, ...o },
          })
        }
        function h(
          e,
          { parentLocator: t, path: r, folderHash: A, protocol: o }
        ) {
          return n.makeLocator(
            e,
            u({ parentLocator: t, path: r, folderHash: A, protocol: o })
          )
        }
        async function p(
          e,
          { protocol: t, fetchOptions: r, inMemory: A = !1 }
        ) {
          const {
              parentLocator: i,
              path: s,
            } = n.parseFileStyleRange(e.reference, { protocol: t }),
            l = o.y1.isAbsolute(s)
              ? {
                  packageFs: new g.M(o.LZ.root),
                  prefixPath: o.LZ.dot,
                  localPath: o.LZ.root,
                }
              : await r.fetcher.fetch(i, r),
            u = l.localPath
              ? {
                  packageFs: new g.M(o.LZ.root),
                  prefixPath: o.y1.relative(o.LZ.root, l.localPath),
                }
              : l
          l !== u && l.releaseFs && l.releaseFs()
          const h = u.packageFs,
            p = o.y1.join(u.prefixPath, s)
          return await a.releaseAfterUseAsync(
            async () =>
              await c.makeArchiveFromDirectory(p, {
                baseFs: h,
                prefixPath: n.getIdentVendorPath(e),
                compressionLevel: r.project.configuration.get(
                  'compressionLevel'
                ),
                inMemory: A,
              }),
            u.releaseFs
          )
        }
        async function d(e, { protocol: t, fetchOptions: r }) {
          return (
            await p(e, { protocol: t, fetchOptions: r, inMemory: !0 })
          ).getBufferAndClose()
        }
        var C = r(20624),
          f = r(32485),
          I = r(46611)
        const E = {
          fetchers: [
            class {
              supports(e, t) {
                return (
                  !!s.test(e.reference) && !!e.reference.startsWith('file:')
                )
              }
              getLocalPath(e, t) {
                return null
              }
              async fetch(e, t) {
                const r = t.checksums.get(e.locatorHash) || null,
                  [A, o, i] = await t.cache.fetchPackageFromCache(e, r, {
                    onHit: () => t.report.reportCacheHit(e),
                    onMiss: () =>
                      t.report.reportCacheMiss(
                        e,
                        n.prettyLocator(t.project.configuration, e) +
                          " can't be found in the cache and will be fetched from the disk"
                      ),
                    loader: () => this.fetchFromDisk(e, t),
                    skipIntegrityCheck: t.skipIntegrityCheck,
                  })
                return {
                  packageFs: A,
                  releaseFs: o,
                  prefixPath: n.getIdentVendorPath(e),
                  checksum: i,
                }
              }
              async fetchFromDisk(e, t) {
                const {
                    parentLocator: r,
                    path: A,
                  } = n.parseFileStyleRange(e.reference, { protocol: 'file:' }),
                  i = o.y1.isAbsolute(A)
                    ? {
                        packageFs: new g.M(o.LZ.root),
                        prefixPath: o.LZ.dot,
                        localPath: o.LZ.root,
                      }
                    : await t.fetcher.fetch(r, t),
                  s = i.localPath
                    ? {
                        packageFs: new g.M(o.LZ.root),
                        prefixPath: o.y1.relative(o.LZ.root, i.localPath),
                      }
                    : i
                i !== s && i.releaseFs && i.releaseFs()
                const l = s.packageFs,
                  u = o.y1.join(s.prefixPath, A),
                  h = await l.readFilePromise(u)
                return await a.releaseAfterUseAsync(
                  async () =>
                    await c.convertToZip(h, {
                      compressionLevel: t.project.configuration.get(
                        'compressionLevel'
                      ),
                      prefixPath: n.getIdentVendorPath(e),
                      stripComponents: 1,
                    }),
                  s.releaseFs
                )
              }
            },
            class {
              supports(e, t) {
                return !!e.reference.startsWith('file:')
              }
              getLocalPath(e, t) {
                const {
                  parentLocator: r,
                  path: A,
                } = n.parseFileStyleRange(e.reference, { protocol: 'file:' })
                if (o.y1.isAbsolute(A)) return A
                const i = t.fetcher.getLocalPath(r, t)
                return null === i ? null : o.y1.resolve(i, A)
              }
              async fetch(e, t) {
                const r = t.checksums.get(e.locatorHash) || null,
                  [A, o, i] = await t.cache.fetchPackageFromCache(e, r, {
                    onHit: () => t.report.reportCacheHit(e),
                    onMiss: () =>
                      t.report.reportCacheMiss(
                        e,
                        n.prettyLocator(t.project.configuration, e) +
                          " can't be found in the cache and will be fetched from the disk"
                      ),
                    loader: () => this.fetchFromDisk(e, t),
                    skipIntegrityCheck: t.skipIntegrityCheck,
                  })
                return {
                  packageFs: A,
                  releaseFs: o,
                  prefixPath: n.getIdentVendorPath(e),
                  localPath: this.getLocalPath(e, t),
                  checksum: i,
                }
              }
              async fetchFromDisk(e, t) {
                return p(e, { protocol: 'file:', fetchOptions: t })
              }
            },
          ],
          resolvers: [
            class {
              supportsDescriptor(e, t) {
                return (
                  !!s.test(e.range) &&
                  (!!e.range.startsWith('file:') || !!i.test(e.range))
                )
              }
              supportsLocator(e, t) {
                return (
                  !!s.test(e.reference) && !!e.reference.startsWith('file:')
                )
              }
              shouldPersistResolution(e, t) {
                return !0
              }
              bindDescriptor(e, t, r) {
                return (
                  i.test(e.range) &&
                    (e = n.makeDescriptor(e, 'file:' + e.range)),
                  n.bindDescriptor(e, { locator: n.stringifyLocator(t) })
                )
              }
              getResolutionDependencies(e, t) {
                return []
              }
              async getCandidates(e, t, r) {
                let A = e.range
                return (
                  A.startsWith('file:') && (A = A.slice('file:'.length)),
                  [n.makeLocator(e, 'file:' + o.cS.toPortablePath(A))]
                )
              }
              async getSatisfying(e, t, r) {
                return null
              }
              async resolve(e, t) {
                if (!t.fetchOptions)
                  throw new Error(
                    'Assertion failed: This resolver cannot be used unless a fetcher is configured'
                  )
                const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
                  A = await a.releaseAfterUseAsync(
                    async () =>
                      await I.G.find(r.prefixPath, { baseFs: r.packageFs }),
                    r.releaseFs
                  )
                return {
                  ...e,
                  version: A.version || '0.0.0',
                  languageName: t.project.configuration.get(
                    'defaultLanguageName'
                  ),
                  linkType: f.Un.HARD,
                  dependencies: A.dependencies,
                  peerDependencies: A.peerDependencies,
                  dependenciesMeta: A.dependenciesMeta,
                  peerDependenciesMeta: A.peerDependenciesMeta,
                  bin: A.bin,
                }
              }
            },
            class {
              supportsDescriptor(e, t) {
                return !!e.range.match(i) || !!e.range.startsWith('file:')
              }
              supportsLocator(e, t) {
                return !!e.reference.startsWith('file:')
              }
              shouldPersistResolution(e, t) {
                return !1
              }
              bindDescriptor(e, t, r) {
                return (
                  i.test(e.range) &&
                    (e = n.makeDescriptor(e, 'file:' + e.range)),
                  n.bindDescriptor(e, { locator: n.stringifyLocator(t) })
                )
              }
              getResolutionDependencies(e, t) {
                return []
              }
              async getCandidates(e, t, r) {
                if (!r.fetchOptions)
                  throw new Error(
                    'Assertion failed: This resolver cannot be used unless a fetcher is configured'
                  )
                const { path: A, parentLocator: o } = l(e.range)
                if (null === o)
                  throw new Error(
                    'Assertion failed: The descriptor should have been bound'
                  )
                const i = await d(
                  n.makeLocator(
                    e,
                    n.makeRange({
                      protocol: 'file:',
                      source: A,
                      selector: A,
                      params: { locator: n.stringifyLocator(o) },
                    })
                  ),
                  { protocol: 'file:', fetchOptions: r.fetchOptions }
                )
                return [
                  h(e, {
                    parentLocator: o,
                    path: A,
                    folderHash: C.makeHash('1', i).slice(0, 6),
                    protocol: 'file:',
                  }),
                ]
              }
              async getSatisfying(e, t, r) {
                return null
              }
              async resolve(e, t) {
                if (!t.fetchOptions)
                  throw new Error(
                    'Assertion failed: This resolver cannot be used unless a fetcher is configured'
                  )
                const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
                  A = await a.releaseAfterUseAsync(
                    async () =>
                      await I.G.find(r.prefixPath, { baseFs: r.packageFs }),
                    r.releaseFs
                  )
                return {
                  ...e,
                  version: A.version || '0.0.0',
                  languageName: t.project.configuration.get(
                    'defaultLanguageName'
                  ),
                  linkType: f.Un.HARD,
                  dependencies: A.dependencies,
                  peerDependencies: A.peerDependencies,
                  dependenciesMeta: A.dependenciesMeta,
                  peerDependenciesMeta: A.peerDependenciesMeta,
                  bin: A.bin,
                }
              }
            },
          ],
        }
      },
      75641: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => F, gitUtils: () => A })
        var A = {}
        r.r(A),
          r.d(A, {
            TreeishProtocols: () => y,
            clone: () => S,
            isGitUrl: () => m,
            lsRemote: () => b,
            normalizeLocator: () => D,
            normalizeRepoUrl: () => Q,
            resolveUrl: () => v,
            splitRepoUrl: () => w,
          })
        var n = r(39922),
          o = r(54143),
          i = r(63088),
          s = r(73632),
          a = r(72785),
          c = r(43896),
          g = r(46009),
          l = r(79669),
          u = r(6220),
          h = r(71191),
          p = r.n(h),
          d = r(53887),
          C = r.n(d),
          f = r(78835),
          I = r.n(f)
        function E() {
          return { ...process.env, GIT_SSH_COMMAND: 'ssh -o BatchMode=yes' }
        }
        const B = [
          /^ssh:/,
          /^git(?:\+[^:]+)?:/,
          /^(?:git\+)?https?:[^#]+\/[^#]+(?:\.git)(?:#.*)?$/,
          /^git@[^#]+\/[^#]+\.git(?:#.*)?$/,
          /^(?:github:|https:\/\/github\.com\/)?(?!\.{1,2}\/)([a-zA-Z._0-9-]+)\/(?!\.{1,2}(?:#|$))([a-zA-Z._0-9-]+?)(?:\.git)?(?:#.*)?$/,
          /^https:\/\/github\.com\/(?!\.{1,2}\/)([a-zA-Z0-9._-]+)\/(?!\.{1,2}(?:#|$))([a-zA-Z0-9._-]+?)\/tarball\/(.+)?$/,
        ]
        var y
        function m(e) {
          return !!e && B.some(t => !!e.match(t))
        }
        function w(e) {
          const t = (e = Q(e)).indexOf('#')
          if (-1 === t)
            return {
              repo: e,
              treeish: { protocol: y.Head, request: 'master' },
              extra: {},
            }
          const r = e.slice(0, t),
            A = e.slice(t + 1)
          if (A.match(/^[a-z]+=/)) {
            const e = p().parse(A)
            for (const [t, r] of Object.entries(e))
              if ('string' != typeof r)
                throw new Error(
                  `Assertion failed: The ${t} parameter must be a literal string`
                )
            const t = Object.values(y).find(t =>
              Object.prototype.hasOwnProperty.call(e, t)
            )
            let n, o
            void 0 !== t
              ? ((n = t), (o = e[t]))
              : ((n = y.Head), (o = 'master'))
            for (const t of Object.values(y)) delete e[t]
            return { repo: r, treeish: { protocol: n, request: o }, extra: e }
          }
          {
            const e = A.indexOf(':')
            let t, n
            return (
              -1 === e
                ? ((t = null), (n = A))
                : ((t = A.slice(0, e)), (n = A.slice(e + 1))),
              { repo: r, treeish: { protocol: t, request: n }, extra: {} }
            )
          }
        }
        function Q(e, { git: t = !1 } = {}) {
          var r
          if (
            ((e = (e = (e = e.replace(/^git\+https:/, 'https:')).replace(
              /^(?:github:|https:\/\/github\.com\/)?(?!\.{1,2}\/)([a-zA-Z0-9._-]+)\/(?!\.{1,2}(?:#|$))([a-zA-Z0-9._-]+?)(?:\.git)?(#.*)?$/,
              'https://github.com/$1/$2.git$3'
            )).replace(
              /^https:\/\/github\.com\/(?!\.{1,2}\/)([a-zA-Z0-9._-]+)\/(?!\.{1,2}(?:#|$))([a-zA-Z0-9._-]+?)\/tarball\/(.+)?$/,
              'https://github.com/$1/$2.git#$3'
            )),
            t)
          ) {
            let t
            e = e.replace(/^git\+([^:]+):/, '$1:')
            try {
              t = I().parse(e)
            } catch (e) {
              t = null
            }
            t &&
              'ssh:' === t.protocol &&
              (null === (r = t.path) || void 0 === r
                ? void 0
                : r.startsWith('/:')) &&
              (e = e.replace(/^ssh:\/\//, ''))
          }
          return e
        }
        function D(e) {
          return o.makeLocator(e, Q(e.reference))
        }
        async function b(e, t) {
          const r = Q(e, { git: !0 })
          if (!l.getNetworkSettings(r, { configuration: t }).enableNetwork)
            throw new Error(
              `Request to '${r}' has been blocked because of your configuration settings`
            )
          let A
          try {
            A = await u.execvp('git', ['ls-remote', '--refs', r], {
              cwd: t.startingCwd,
              env: E(),
              strict: !0,
            })
          } catch (t) {
            throw ((t.message = `Listing the refs for ${e} failed`), t)
          }
          const n = new Map(),
            o = /^([a-f0-9]{40})\t(refs\/[^\n]+)/gm
          let i
          for (; null !== (i = o.exec(A.stdout)); ) n.set(i[2], i[1])
          return n
        }
        async function v(e, t) {
          const {
              repo: r,
              treeish: { protocol: A, request: n },
              extra: o,
            } = w(e),
            i = await b(r, t),
            s = (e, t) => {
              switch (e) {
                case y.Commit:
                  if (!t.match(/^[a-f0-9]{40}$/))
                    throw new Error('Invalid commit hash')
                  return p().stringify({ ...o, commit: t })
                case y.Head: {
                  const e = i.get('refs/heads/' + t)
                  if (void 0 === e) throw new Error(`Unknown head ("${t}")`)
                  return p().stringify({ ...o, commit: e })
                }
                case y.Tag: {
                  const e = i.get('refs/tags/' + t)
                  if (void 0 === e) throw new Error(`Unknown tag ("${t}")`)
                  return p().stringify({ ...o, commit: e })
                }
                case y.Semver: {
                  if (!C().validRange(t))
                    throw new Error(`Invalid range ("${t}")`)
                  const e = new Map(
                      [...i.entries()]
                        .filter(([e]) => e.startsWith('refs/tags/'))
                        .map(([e, t]) => [C().parse(e.slice(10)), t])
                        .filter(e => null !== e[0])
                    ),
                    r = C().maxSatisfying([...e.keys()], t)
                  if (null === r) throw new Error(`No matching range ("${t}")`)
                  return p().stringify({ ...o, commit: e.get(r) })
                }
                case null: {
                  let e
                  if (null !== (e = a(y.Commit, t))) return e
                  if (null !== (e = a(y.Tag, t))) return e
                  if (null !== (e = a(y.Head, t))) return e
                  throw t.match(/^[a-f0-9]+$/)
                    ? new Error(
                        `Couldn't resolve "${t}" as either a commit, a tag, or a head - if a commit, use the 40-characters commit hash`
                      )
                    : new Error(
                        `Couldn't resolve "${t}" as either a commit, a tag, or a head`
                      )
                }
                default:
                  throw new Error(`Invalid Git resolution protocol ("${e}")`)
              }
            },
            a = (e, t) => {
              try {
                return s(e, t)
              } catch (e) {
                return null
              }
            }
          return `${r}#${s(A, n)}`
        }
        async function S(e, t) {
          return await t.getLimit('cloneConcurrency')(async () => {
            const {
              repo: r,
              treeish: { protocol: A, request: n },
            } = w(e)
            if ('commit' !== A)
              throw new Error('Invalid treeish protocol when cloning')
            const o = Q(r, { git: !0 })
            if (
              !1 === l.getNetworkSettings(o, { configuration: t }).enableNetwork
            )
              throw new Error(
                `Request to '${o}' has been blocked because of your configuration settings`
              )
            const i = await c.xfs.mktempPromise(),
              s = { cwd: i, env: E(), strict: !0 }
            try {
              await u.execvp(
                'git',
                [
                  'clone',
                  '-c core.autocrlf=false',
                  o,
                  g.cS.fromPortablePath(i),
                ],
                s
              ),
                await u.execvp('git', ['checkout', '' + n], s)
            } catch (e) {
              throw ((e.message = 'Repository clone failed: ' + e.message), e)
            }
            return i
          })
        }
        !(function (e) {
          ;(e.Commit = 'commit'),
            (e.Head = 'head'),
            (e.Tag = 'tag'),
            (e.Semver = 'semver')
        })(y || (y = {}))
        var k = r(32485),
          N = r(46611)
        const F = {
          configuration: {
            cloneConcurrency: {
              description: 'Maximal number of concurrent clones',
              type: n.a2.NUMBER,
              default: 2,
            },
          },
          fetchers: [
            class {
              supports(e, t) {
                return m(e.reference)
              }
              getLocalPath(e, t) {
                return null
              }
              async fetch(e, t) {
                const r = t.checksums.get(e.locatorHash) || null,
                  A = D(e),
                  n = new Map(t.checksums)
                n.set(A.locatorHash, r)
                const i = { ...t, checksums: n },
                  s = await this.downloadHosted(A, i)
                if (null !== s) return s
                const [a, c, g] = await t.cache.fetchPackageFromCache(e, r, {
                  onHit: () => t.report.reportCacheHit(e),
                  onMiss: () =>
                    t.report.reportCacheMiss(
                      e,
                      o.prettyLocator(t.project.configuration, e) +
                        " can't be found in the cache and will be fetched from the remote repository"
                    ),
                  loader: () => this.cloneFromRemote(A, i),
                  skipIntegrityCheck: t.skipIntegrityCheck,
                })
                return {
                  packageFs: a,
                  releaseFs: c,
                  prefixPath: o.getIdentVendorPath(e),
                  checksum: g,
                }
              }
              async downloadHosted(e, t) {
                return t.project.configuration.reduceHook(
                  e => e.fetchHostedRepository,
                  null,
                  e,
                  t
                )
              }
              async cloneFromRemote(e, t) {
                const r = await S(e.reference, t.project.configuration),
                  A = w(e.reference),
                  n = g.y1.join(r, 'package.tgz')
                await i.prepareExternalProject(r, n, {
                  configuration: t.project.configuration,
                  report: t.report,
                  workspace: A.extra.workspace,
                })
                const l = await c.xfs.readFilePromise(n)
                return await s.releaseAfterUseAsync(
                  async () =>
                    await a.convertToZip(l, {
                      compressionLevel: t.project.configuration.get(
                        'compressionLevel'
                      ),
                      prefixPath: o.getIdentVendorPath(e),
                      stripComponents: 1,
                    })
                )
              }
            },
          ],
          resolvers: [
            class {
              supportsDescriptor(e, t) {
                return m(e.range)
              }
              supportsLocator(e, t) {
                return m(e.reference)
              }
              shouldPersistResolution(e, t) {
                return !0
              }
              bindDescriptor(e, t, r) {
                return e
              }
              getResolutionDependencies(e, t) {
                return []
              }
              async getCandidates(e, t, r) {
                const A = await v(e.range, r.project.configuration)
                return [o.makeLocator(e, A)]
              }
              async getSatisfying(e, t, r) {
                return null
              }
              async resolve(e, t) {
                if (!t.fetchOptions)
                  throw new Error(
                    'Assertion failed: This resolver cannot be used unless a fetcher is configured'
                  )
                const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
                  A = await s.releaseAfterUseAsync(
                    async () =>
                      await N.G.find(r.prefixPath, { baseFs: r.packageFs }),
                    r.releaseFs
                  )
                return {
                  ...e,
                  version: A.version || '0.0.0',
                  languageName: t.project.configuration.get(
                    'defaultLanguageName'
                  ),
                  linkType: k.Un.HARD,
                  dependencies: A.dependencies,
                  peerDependencies: A.peerDependencies,
                  dependenciesMeta: A.dependenciesMeta,
                  peerDependenciesMeta: A.peerDependenciesMeta,
                  bin: A.bin,
                }
              }
            },
          ],
        }
      },
      68126: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => d })
        var A = r(54143),
          n = r(79669),
          o = r(72785),
          i = r(63088),
          s = r(43896),
          a = r(75448),
          c = r(46009),
          g = r(75641),
          l = r(71191),
          u = r.n(l)
        const h = [
          /^https?:\/\/(?:([^/]+?)@)?github.com\/([^/#]+)\/([^/#]+)\/tarball\/([^/#]+)(?:#(.*))?$/,
          /^https?:\/\/(?:([^/]+?)@)?github.com\/([^/#]+)\/([^/#]+?)(?:\.git)?(?:#(.*))?$/,
        ]
        class p {
          supports(e, t) {
            return !(!(r = e.reference) || !h.some(e => !!r.match(e)))
            var r
          }
          getLocalPath(e, t) {
            return null
          }
          async fetch(e, t) {
            const r = t.checksums.get(e.locatorHash) || null,
              [n, o, i] = await t.cache.fetchPackageFromCache(e, r, {
                onHit: () => t.report.reportCacheHit(e),
                onMiss: () =>
                  t.report.reportCacheMiss(
                    e,
                    A.prettyLocator(t.project.configuration, e) +
                      " can't be found in the cache and will be fetched from GitHub"
                  ),
                loader: () => this.fetchFromNetwork(e, t),
                skipIntegrityCheck: t.skipIntegrityCheck,
              })
            return {
              packageFs: n,
              releaseFs: o,
              prefixPath: A.getIdentVendorPath(e),
              checksum: i,
            }
          }
          async fetchFromNetwork(e, t) {
            const r = await n.get(this.getLocatorUrl(e, t), {
              configuration: t.project.configuration,
            })
            return await s.xfs.mktempPromise(async n => {
              const l = new a.M(n)
              await o.extractArchiveTo(r, l, { stripComponents: 1 })
              const u = g.gitUtils.splitRepoUrl(e.reference),
                h = c.y1.join(n, 'package.tgz')
              await i.prepareExternalProject(n, h, {
                configuration: t.project.configuration,
                report: t.report,
                workspace: u.extra.workspace,
              })
              const p = await s.xfs.readFilePromise(h)
              return await o.convertToZip(p, {
                compressionLevel: t.project.configuration.get(
                  'compressionLevel'
                ),
                prefixPath: A.getIdentVendorPath(e),
                stripComponents: 1,
              })
            })
          }
          getLocatorUrl(e, t) {
            const {
              auth: r,
              username: A,
              reponame: n,
              treeish: o,
            } = (function (e) {
              let t
              for (const r of h) if (((t = e.match(r)), t)) break
              if (!t)
                throw new Error(
                  `Input cannot be parsed as a valid GitHub URL ('${e}').`
                )
              let [, r, A, n, o = 'master'] = t
              const { commit: i } = u().parse(o)
              return (
                (o = i || o.replace(/[^:]*:/, '')),
                { auth: r, username: A, reponame: n, treeish: o }
              )
            })(e.reference)
            return `https://${
              r ? r + '@' : ''
            }github.com/${A}/${n}/archive/${o}.tar.gz`
          }
        }
        const d = {
          hooks: {
            async fetchHostedRepository(e, t, r) {
              if (null !== e) return e
              const A = new p()
              if (!A.supports(t, r)) return null
              try {
                return await A.fetch(t, r)
              } catch (e) {
                return null
              }
            },
          },
        }
      },
      99148: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => l })
        var A = r(54143),
          n = r(79669),
          o = r(72785)
        const i = /^[^?]*\.(?:tar\.gz|tgz)(?:\?.*)?$/,
          s = /^https?:/
        var a = r(46611),
          c = r(32485),
          g = r(73632)
        const l = {
          fetchers: [
            class {
              supports(e, t) {
                return !!i.test(e.reference) && !!s.test(e.reference)
              }
              getLocalPath(e, t) {
                return null
              }
              async fetch(e, t) {
                const r = t.checksums.get(e.locatorHash) || null,
                  [n, o, i] = await t.cache.fetchPackageFromCache(e, r, {
                    onHit: () => t.report.reportCacheHit(e),
                    onMiss: () =>
                      t.report.reportCacheMiss(
                        e,
                        A.prettyLocator(t.project.configuration, e) +
                          " can't be found in the cache and will be fetched from the remote server"
                      ),
                    loader: () => this.fetchFromNetwork(e, t),
                    skipIntegrityCheck: t.skipIntegrityCheck,
                  })
                return {
                  packageFs: n,
                  releaseFs: o,
                  prefixPath: A.getIdentVendorPath(e),
                  checksum: i,
                }
              }
              async fetchFromNetwork(e, t) {
                const r = await n.get(e.reference, {
                  configuration: t.project.configuration,
                })
                return await o.convertToZip(r, {
                  compressionLevel: t.project.configuration.get(
                    'compressionLevel'
                  ),
                  prefixPath: A.getIdentVendorPath(e),
                  stripComponents: 1,
                })
              }
            },
          ],
          resolvers: [
            class {
              supportsDescriptor(e, t) {
                return !!i.test(e.range) && !!s.test(e.range)
              }
              supportsLocator(e, t) {
                return !!i.test(e.reference) && !!s.test(e.reference)
              }
              shouldPersistResolution(e, t) {
                return !0
              }
              bindDescriptor(e, t, r) {
                return e
              }
              getResolutionDependencies(e, t) {
                return []
              }
              async getCandidates(e, t, r) {
                return [A.convertDescriptorToLocator(e)]
              }
              async getSatisfying(e, t, r) {
                return null
              }
              async resolve(e, t) {
                if (!t.fetchOptions)
                  throw new Error(
                    'Assertion failed: This resolver cannot be used unless a fetcher is configured'
                  )
                const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
                  A = await g.releaseAfterUseAsync(
                    async () =>
                      await a.G.find(r.prefixPath, { baseFs: r.packageFs }),
                    r.releaseFs
                  )
                return {
                  ...e,
                  version: A.version || '0.0.0',
                  languageName: t.project.configuration.get(
                    'defaultLanguageName'
                  ),
                  linkType: c.Un.HARD,
                  dependencies: A.dependencies,
                  peerDependencies: A.peerDependencies,
                  dependenciesMeta: A.dependenciesMeta,
                  peerDependenciesMeta: A.peerDependenciesMeta,
                  bin: A.bin,
                }
              }
            },
          ],
        }
      },
      64314: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => I })
        var A = r(39922),
          n = r(36370),
          o = r(25413),
          i = r(46611),
          s = r(85824),
          a = r(6220),
          c = r(63088),
          g = r(54143),
          l = r(43896),
          u = r(46009),
          h = r(40822),
          p = r(80305),
          d = r.n(p),
          C = r(31669)
        class f extends o.BaseCommand {
          constructor() {
            super(...arguments),
              (this.usev2 = !1),
              (this.assumeFreshProject = !1),
              (this.yes = !1),
              (this.private = !1),
              (this.workspace = !1),
              (this.install = !1)
          }
          async execute() {
            if (l.xfs.existsSync(u.y1.join(this.context.cwd, i.G.fileName)))
              throw new h.UsageError(
                'A package.json already exists in the specified directory'
              )
            const e = await A.VK.find(this.context.cwd, this.context.plugins),
              t = this.install
                ? !0 === this.install
                  ? 'latest'
                  : this.install
                : null
            return null !== t
              ? await this.executeProxy(e, t)
              : await this.executeRegular(e)
          }
          async executeProxy(e, t) {
            if (null !== e.get('yarnPath'))
              throw new h.UsageError(
                `Cannot use the --install flag when the current directory already uses yarnPath (from ${e.sources.get(
                  'yarnPath'
                )})`
              )
            if (null !== e.projectCwd)
              throw new h.UsageError(
                'Cannot use the --install flag when the current directory is already part of a project'
              )
            l.xfs.existsSync(this.context.cwd) ||
              (await l.xfs.mkdirPromise(this.context.cwd, { recursive: !0 }))
            const r = u.y1.join(this.context.cwd, e.get('lockfileFilename'))
            l.xfs.existsSync(r) || (await l.xfs.writeFilePromise(r, ''))
            const A = await this.cli.run(['set', 'version', t])
            if (0 !== A) return A
            this.context.stdout.write('\n')
            const n = ['--assume-fresh-project']
            return (
              this.private && n.push('-p'),
              this.workspace && n.push('-w'),
              this.yes && n.push('-y'),
              await l.xfs.mktempPromise(async e => {
                const { code: t } = await a.pipevp('yarn', ['init', ...n], {
                  cwd: this.context.cwd,
                  stdin: this.context.stdin,
                  stdout: this.context.stdout,
                  stderr: this.context.stderr,
                  env: await c.makeScriptEnv({ binFolder: e }),
                })
                return t
              })
            )
          }
          async executeRegular(e) {
            let t = null
            if (!this.assumeFreshProject)
              try {
                t = await s.I.find(e, this.context.cwd)
              } catch (e) {
                t = null
              }
            l.xfs.existsSync(this.context.cwd) ||
              (await l.xfs.mkdirPromise(this.context.cwd, { recursive: !0 }))
            const r = new i.G(),
              A = Object.fromEntries(e.get('initFields').entries())
            r.load(A),
              (r.name = g.makeIdent(
                e.get('initScope'),
                u.y1.basename(this.context.cwd)
              )),
              (r.version = e.get('initVersion')),
              (r.private = this.private || this.workspace),
              (r.license = e.get('initLicense')),
              this.workspace &&
                (await l.xfs.mkdirPromise(
                  u.y1.join(this.context.cwd, 'packages'),
                  { recursive: !0 }
                ),
                (r.workspaceDefinitions = [{ pattern: 'packages/*' }]))
            const n = {}
            r.exportTo(n),
              (C.inspect.styles.name = 'cyan'),
              this.context.stdout.write(
                (0, C.inspect)(n, { depth: 1 / 0, colors: !0, compact: !1 }) +
                  '\n'
              )
            const o = u.y1.join(this.context.cwd, i.G.fileName)
            await l.xfs.changeFilePromise(o, JSON.stringify(n, null, 2) + '\n')
            const c = u.y1.join(this.context.cwd, 'README.md')
            if (
              (l.xfs.existsSync(c) ||
                (await l.xfs.writeFilePromise(
                  c,
                  `# ${g.stringifyIdent(r.name)}\n`
                )),
              !t)
            ) {
              const t = u.y1.join(this.context.cwd, u.QS.lockfile)
              await l.xfs.writeFilePromise(t, '')
              const r = ['/.yarn/** linguist-vendored']
                  .map(e => e + '\n')
                  .join(''),
                A = u.y1.join(this.context.cwd, '.gitattributes')
              l.xfs.existsSync(A) || (await l.xfs.writeFilePromise(A, r))
              const n = [
                  '/.yarn/*',
                  '!/.yarn/releases',
                  '!/.yarn/plugins',
                  '!/.yarn/sdks',
                  '',
                  "# Swap the comments on the following lines if you don't wish to use zero-installs",
                  '# Documentation here: https://yarnpkg.com/features/zero-installs',
                  '!/.yarn/cache',
                  '#/.pnp.*',
                ]
                  .map(e => e + '\n')
                  .join(''),
                o = u.y1.join(this.context.cwd, '.gitignore')
              l.xfs.existsSync(o) || (await l.xfs.writeFilePromise(o, n))
              const i = {
                '*': { endOfLine: 'lf', insertFinalNewline: !0 },
                '*.{js,json,.yml}': {
                  charset: 'utf-8',
                  indentStyle: 'space',
                  indentSize: 2,
                },
              }
              d()(i, e.get('initEditorConfig'))
              let s = 'root = true\n'
              for (const [e, t] of Object.entries(i)) {
                s += `\n[${e}]\n`
                for (const [e, r] of Object.entries(t)) {
                  s += `${e.replace(
                    /[A-Z]/g,
                    e => '_' + e.toLowerCase()
                  )} = ${r}\n`
                }
              }
              const c = u.y1.join(this.context.cwd, '.editorconfig')
              l.xfs.existsSync(c) || (await l.xfs.writeFilePromise(c, s)),
                await a.execvp('git', ['init'], { cwd: this.context.cwd })
            }
          }
        }
        ;(f.usage = h.Command.Usage({
          description: 'create a new package',
          details:
            '\n      This command will setup a new package in your local directory.\n\n      If the `-p,--private` or `-w,--workspace` options are set, the package will be private by default.\n\n      If the `-w,--workspace` option is set, the package will be configured to accept a set of workspaces in the `packages/` directory.\n\n      If the `-i,--install` option is given a value, Yarn will first download it using `yarn set version` and only then forward the init call to the newly downloaded bundle. Without arguments, the downloaded bundle will be `latest`.\n\n      The initial settings of the manifest can be changed by using the `initScope` and `initFields` configuration values. Additionally, Yarn will generate an EditorConfig file whose rules can be altered via `initEditorConfig`, and will initialize a Git repository in the current directory.\n    ',
          examples: [
            ['Create a new package in the local directory', 'yarn init'],
            [
              'Create a new private package in the local directory',
              'yarn init -p',
            ],
            [
              'Create a new package and store the Yarn release inside',
              'yarn init -i latest',
            ],
            [
              'Create a new private package and defines it as a workspace root',
              'yarn init -w',
            ],
          ],
        })),
          (0, n.gn)(
            [h.Command.Boolean('-2', { hidden: !0 })],
            f.prototype,
            'usev2',
            void 0
          ),
          (0, n.gn)(
            [h.Command.Boolean('--assume-fresh-project', { hidden: !0 })],
            f.prototype,
            'assumeFreshProject',
            void 0
          ),
          (0, n.gn)(
            [h.Command.Boolean('-y,--yes', { hidden: !0 })],
            f.prototype,
            'yes',
            void 0
          ),
          (0, n.gn)(
            [
              h.Command.Boolean('-p,--private', {
                description: 'Initialize a private package',
              }),
            ],
            f.prototype,
            'private',
            void 0
          ),
          (0, n.gn)(
            [
              h.Command.Boolean('-w,--workspace', {
                description:
                  'Initialize a private workspace root with a `packages/` directory',
              }),
            ],
            f.prototype,
            'workspace',
            void 0
          ),
          (0, n.gn)(
            [
              h.Command.String('-i,--install', {
                tolerateBoolean: !0,
                description:
                  'Initialize a package with a specific bundle that will be locked in the project',
              }),
            ],
            f.prototype,
            'install',
            void 0
          ),
          (0, n.gn)([h.Command.Path('init')], f.prototype, 'execute', null)
        const I = {
          configuration: {
            initLicense: {
              description:
                'License used when creating packages via the init command',
              type: A.a2.STRING,
              default: null,
            },
            initScope: {
              description:
                'Scope used when creating packages via the init command',
              type: A.a2.STRING,
              default: null,
            },
            initVersion: {
              description:
                'Version used when creating packages via the init command',
              type: A.a2.STRING,
              default: null,
            },
            initFields: {
              description:
                'Additional fields to set when creating packages via the init command',
              type: A.a2.MAP,
              valueDefinition: { description: '', type: A.a2.ANY },
            },
            initEditorConfig: {
              description:
                'Extra rules to define in the generator editorconfig',
              type: A.a2.MAP,
              valueDefinition: { description: '', type: A.a2.ANY },
            },
          },
          commands: [f],
        }
      },
      92994: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => g })
        var A = r(54143),
          n = r(46009),
          o = r(75448),
          i = r(10489)
        var s = r(46611),
          a = r(32485),
          c = r(73632)
        const g = {
          fetchers: [
            class {
              supports(e, t) {
                return !!e.reference.startsWith('link:')
              }
              getLocalPath(e, t) {
                const {
                  parentLocator: r,
                  path: o,
                } = A.parseFileStyleRange(e.reference, { protocol: 'link:' })
                if (n.y1.isAbsolute(o)) return o
                const i = t.fetcher.getLocalPath(r, t)
                return null === i ? null : n.y1.resolve(i, o)
              }
              async fetch(e, t) {
                const {
                    parentLocator: r,
                    path: s,
                  } = A.parseFileStyleRange(e.reference, { protocol: 'link:' }),
                  a = n.y1.isAbsolute(s)
                    ? {
                        packageFs: new o.M(n.LZ.root),
                        prefixPath: n.LZ.dot,
                        localPath: n.LZ.root,
                      }
                    : await t.fetcher.fetch(r, t),
                  c = a.localPath
                    ? {
                        packageFs: new o.M(n.LZ.root),
                        prefixPath: n.y1.relative(n.LZ.root, a.localPath),
                      }
                    : a
                a !== c && a.releaseFs && a.releaseFs()
                const g = c.packageFs,
                  l = n.y1.join(c.prefixPath, s)
                return a.localPath
                  ? {
                      packageFs: new o.M(l, { baseFs: g }),
                      releaseFs: c.releaseFs,
                      prefixPath: n.LZ.dot,
                      discardFromLookup: !0,
                      localPath: l,
                    }
                  : {
                      packageFs: new i.n(l, { baseFs: g }),
                      releaseFs: c.releaseFs,
                      prefixPath: n.LZ.dot,
                      discardFromLookup: !0,
                    }
              }
            },
            class {
              supports(e, t) {
                return !!e.reference.startsWith('portal:')
              }
              getLocalPath(e, t) {
                const {
                  parentLocator: r,
                  path: o,
                } = A.parseFileStyleRange(e.reference, { protocol: 'portal:' })
                if (n.y1.isAbsolute(o)) return o
                const i = t.fetcher.getLocalPath(r, t)
                return null === i ? null : n.y1.resolve(i, o)
              }
              async fetch(e, t) {
                const {
                    parentLocator: r,
                    path: s,
                  } = A.parseFileStyleRange(e.reference, {
                    protocol: 'portal:',
                  }),
                  a = n.y1.isAbsolute(s)
                    ? {
                        packageFs: new o.M(n.LZ.root),
                        prefixPath: n.LZ.dot,
                        localPath: n.LZ.root,
                      }
                    : await t.fetcher.fetch(r, t),
                  c = a.localPath
                    ? {
                        packageFs: new o.M(n.LZ.root),
                        prefixPath: n.y1.relative(n.LZ.root, a.localPath),
                      }
                    : a
                a !== c && a.releaseFs && a.releaseFs()
                const g = c.packageFs,
                  l = n.y1.join(c.prefixPath, s)
                return a.localPath
                  ? {
                      packageFs: new o.M(l, { baseFs: g }),
                      releaseFs: c.releaseFs,
                      prefixPath: n.LZ.dot,
                      localPath: l,
                    }
                  : {
                      packageFs: new i.n(l, { baseFs: g }),
                      releaseFs: c.releaseFs,
                      prefixPath: n.LZ.dot,
                    }
              }
            },
          ],
          resolvers: [
            class {
              supportsDescriptor(e, t) {
                return !!e.range.startsWith('link:')
              }
              supportsLocator(e, t) {
                return !!e.reference.startsWith('link:')
              }
              shouldPersistResolution(e, t) {
                return !1
              }
              bindDescriptor(e, t, r) {
                return A.bindDescriptor(e, { locator: A.stringifyLocator(t) })
              }
              getResolutionDependencies(e, t) {
                return []
              }
              async getCandidates(e, t, r) {
                const o = e.range.slice('link:'.length)
                return [A.makeLocator(e, 'link:' + n.cS.toPortablePath(o))]
              }
              async getSatisfying(e, t, r) {
                return null
              }
              async resolve(e, t) {
                return {
                  ...e,
                  version: '0.0.0',
                  languageName: t.project.configuration.get(
                    'defaultLanguageName'
                  ),
                  linkType: a.Un.SOFT,
                  dependencies: new Map(),
                  peerDependencies: new Map(),
                  dependenciesMeta: new Map(),
                  peerDependenciesMeta: new Map(),
                  bin: new Map(),
                }
              }
            },
            class {
              supportsDescriptor(e, t) {
                return !!e.range.startsWith('portal:')
              }
              supportsLocator(e, t) {
                return !!e.reference.startsWith('portal:')
              }
              shouldPersistResolution(e, t) {
                return !1
              }
              bindDescriptor(e, t, r) {
                return A.bindDescriptor(e, { locator: A.stringifyLocator(t) })
              }
              getResolutionDependencies(e, t) {
                return []
              }
              async getCandidates(e, t, r) {
                const o = e.range.slice('portal:'.length)
                return [A.makeLocator(e, 'portal:' + n.cS.toPortablePath(o))]
              }
              async getSatisfying(e, t, r) {
                return null
              }
              async resolve(e, t) {
                if (!t.fetchOptions)
                  throw new Error(
                    'Assertion failed: This resolver cannot be used unless a fetcher is configured'
                  )
                const r = await t.fetchOptions.fetcher.fetch(e, t.fetchOptions),
                  A = await c.releaseAfterUseAsync(
                    async () =>
                      await s.G.find(r.prefixPath, { baseFs: r.packageFs }),
                    r.releaseFs
                  )
                return {
                  ...e,
                  version: A.version || '0.0.0',
                  languageName: t.project.configuration.get(
                    'defaultLanguageName'
                  ),
                  linkType: a.Un.SOFT,
                  dependencies: new Map([
                    ...A.dependencies,
                    ...A.devDependencies,
                  ]),
                  peerDependencies: A.peerDependencies,
                  dependenciesMeta: A.dependenciesMeta,
                  peerDependenciesMeta: A.peerDependenciesMeta,
                  bin: A.bin,
                }
              }
            },
          ],
        }
      },
      8375: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => ne, getPnpPath: () => Ae })
        var A,
          n = r(39922),
          o = r(46009),
          i = r(54143)
        !(function (e) {
          ;(e[(e.YES = 0)] = 'YES'),
            (e[(e.NO = 1)] = 'NO'),
            (e[(e.DEPENDS = 2)] = 'DEPENDS')
        })(A || (A = {}))
        const s = (e, t) => `${e}@${t}`,
          a = (e, t) => {
            const r = t.indexOf('#'),
              A = r >= 0 ? t.substring(r + 1) : t
            return s(e, A)
          }
        var c
        !(function (e) {
          ;(e[(e.NONE = -1)] = 'NONE'),
            (e[(e.PERF = 0)] = 'PERF'),
            (e[(e.CHECK = 1)] = 'CHECK'),
            (e[(e.REASONS = 2)] = 'REASONS'),
            (e[(e.INTENSIVE_CHECK = 9)] = 'INTENSIVE_CHECK')
        })(c || (c = {}))
        const g = (e, t) => {
            if (t.decoupled) return t
            const {
                name: r,
                references: A,
                ident: n,
                locator: o,
                dependencies: i,
                originalDependencies: s,
                hoistedDependencies: a,
                peerNames: c,
                reasons: g,
                isHoistBorder: l,
              } = t,
              u = {
                name: r,
                references: new Set(A),
                ident: n,
                locator: o,
                dependencies: new Map(i),
                originalDependencies: new Map(s),
                hoistedDependencies: new Map(a),
                peerNames: new Set(c),
                reasons: new Map(g),
                decoupled: !0,
                isHoistBorder: l,
              },
              h = u.dependencies.get(r)
            return (
              h && h.ident == u.ident && u.dependencies.set(r, u),
              e.dependencies.set(u.name, u),
              u
            )
          },
          l = e => {
            const t = new Set(),
              r = (A, n = new Set()) => {
                if (!n.has(A)) {
                  n.add(A)
                  for (const o of A.peerNames)
                    if (!e.peerNames.has(o)) {
                      const A = e.dependencies.get(o)
                      A && !t.has(A) && r(A, n)
                    }
                  t.add(A)
                }
              }
            for (const t of e.dependencies.values())
              e.peerNames.has(t.name) || r(t)
            return t
          },
          u = (e, t, r, A, n = new Set()) => {
            const o = t[t.length - 1]
            if (n.has(o)) return
            n.add(o)
            const i = ((e, t) => {
                const r = new Map([[e.name, [e.ident]]])
                for (const t of e.dependencies.values())
                  e.peerNames.has(t.name) || r.set(t.name, [t.ident])
                const A = Array.from(t.keys())
                A.sort((e, r) => {
                  const A = t.get(e),
                    n = t.get(r)
                  return n.peerDependents.size !== A.peerDependents.size
                    ? n.peerDependents.size - A.peerDependents.size
                    : n.dependents.size - A.dependents.size
                })
                for (const t of A) {
                  const A = t.substring(0, t.indexOf('@', 1)),
                    n = t.substring(A.length + 1)
                  if (!e.peerNames.has(A)) {
                    let e = r.get(A)
                    e || ((e = []), r.set(A, e)), e.indexOf(n) < 0 && e.push(n)
                  }
                }
                return r
              })(o, E(o)),
              s = new Map(Array.from(i.entries()).map(([e, t]) => [e, t[0]])),
              a =
                o === e
                  ? new Map()
                  : (e => {
                      const t = new Map(),
                        r = new Set(),
                        A = n => {
                          if (!r.has(n)) {
                            r.add(n)
                            for (const r of n.hoistedDependencies.values())
                              e.dependencies.has(r.name) || t.set(r.name, r)
                            for (const e of n.dependencies.values())
                              n.peerNames.has(e.name) || A(e)
                          }
                        }
                      return A(e), t
                    })(o)
            let c
            do {
              p(e, t, r, a, s, i, A), (c = !1)
              for (const [e, t] of i)
                t.length > 1 &&
                  !o.dependencies.has(e) &&
                  (s.delete(e), t.shift(), s.set(e, t[0]), (c = !0))
            } while (c)
            for (const n of o.dependencies.values())
              o.peerNames.has(n.name) ||
                r.has(n.locator) ||
                (r.add(n.locator), u(e, [...t, n], r, A), r.delete(n.locator))
          },
          h = (e, t, r, n, o, i, { outputReason: s }) => {
            let a,
              c = null,
              g = new Set()
            s &&
              (a =
                '' +
                Array.from(e)
                  .map(e => B(e))
                  .join('→'))
            const l = t[t.length - 1],
              u = r.ident === l.ident,
              h = o.get(r.name)
            let p = h === r.ident && !u
            if (
              (s &&
                !p &&
                h &&
                !u &&
                (c = `- filled by: ${B(i.get(r.name)[0])} at ${a}`),
              p)
            ) {
              let e = !1
              const A = n.get(r.name)
              if (
                ((e = !A || A.ident === r.ident),
                s && !e && (c = `- filled by: ${B(A.locator)} at ${a}`),
                e)
              )
                for (let A = 1; A < t.length - 1; A++) {
                  const n = t[A],
                    o = n.dependencies.get(r.name)
                  if (o && o.ident !== r.ident) {
                    ;(e = !1),
                      s &&
                        (c = `- filled by: ${B(o.locator)} at ${B(n.locator)}`)
                    break
                  }
                }
              p = e
            }
            if (p) {
              let e = !0
              const A = new Set(r.peerNames)
              for (let r = t.length - 1; r >= 1; r--) {
                const n = t[r]
                for (const o of A) {
                  if (n.peerNames.has(o) && n.originalDependencies.has(o))
                    continue
                  const i = n.dependencies.get(o)
                  i &&
                    (r === t.length - 1
                      ? g.add(i)
                      : ((g = null),
                        (e = !1),
                        s &&
                          (c = `- peer dependency ${B(
                            i.locator
                          )} from parent ${B(
                            n.locator
                          )} was not hoisted to ${a}`))),
                    A.delete(o)
                }
                if (!e) break
              }
              p = e
            }
            return null !== g && g.size > 0
              ? { isHoistable: A.DEPENDS, dependsOn: g, reason: c }
              : { isHoistable: p ? A.YES : A.NO, reason: c }
          },
          p = (e, t, r, n, o, i, s) => {
            const a = t[t.length - 1],
              u = new Set(),
              p = (t, C, I, E) => {
                if (u.has(I)) return
                const m = [...C, I.locator],
                  w = new Map(),
                  Q = new Map()
                for (const e of l(I)) {
                  let g = null
                  if (
                    (g ||
                      (g = h(r, [a, ...t, I], e, n, o, i, {
                        outputReason: s.debugLevel >= c.REASONS,
                      })),
                    Q.set(e, g),
                    g.isHoistable === A.DEPENDS)
                  )
                    for (const t of g.dependsOn) {
                      const r = w.get(t.name) || new Set()
                      r.add(e.name), w.set(t.name, r)
                    }
                }
                const D = new Set(),
                  b = (e, t, r) => {
                    if (!D.has(e)) {
                      D.add(e),
                        e.ident !== I.ident &&
                          Q.set(e, { isHoistable: A.NO, reason: r })
                      for (const A of w.get(e.name) || [])
                        b(I.dependencies.get(A), t, r)
                    }
                  }
                let v
                s.debugLevel >= c.REASONS &&
                  (v =
                    '' +
                    Array.from(r)
                      .map(e => B(e))
                      .join('→'))
                for (const [e, t] of Q)
                  t.isHoistable === A.NO &&
                    b(
                      e,
                      t,
                      `- peer dependency ${B(e.locator)} from parent ${B(
                        I.locator
                      )} was not hoisted to ${v}`
                    )
                for (const e of Q.keys())
                  if (!D.has(e)) {
                    I.dependencies.delete(e.name),
                      I.hoistedDependencies.set(e.name, e),
                      I.reasons.delete(e.name)
                    const t = a.dependencies.get(e.name)
                    if (t) for (const r of e.references) t.references.add(r)
                    else
                      a.ident !== e.ident &&
                        (a.dependencies.set(e.name, e), E.add(e))
                  }
                if (s.check) {
                  const r = d(e)
                  if (r)
                    throw new Error(
                      `${r}, after hoisting dependencies of ${[a, ...t, I]
                        .map(e => B(e.locator))
                        .join('→')}:\n${y(e)}`
                    )
                }
                const S = l(I)
                for (const e of S)
                  if (D.has(e) && m.indexOf(e.locator) < 0) {
                    const r = Q.get(e)
                    if (
                      (r.isHoistable !== A.YES &&
                        I.reasons.set(e.name, r.reason),
                      !e.isHoistBorder)
                    ) {
                      u.add(I)
                      const r = g(I, e)
                      p([...t, I], [...C, I.locator], r, f), u.delete(I)
                    }
                  }
              }
            let C,
              f = new Set(l(a))
            do {
              ;(C = f), (f = new Set())
              for (const e of C) {
                if (e.locator === a.locator || e.isHoistBorder) continue
                const t = g(a, e)
                p([], Array.from(r), t, f)
              }
            } while (f.size > 0)
          },
          d = e => {
            const t = [],
              r = new Set(),
              A = new Set(),
              n = (e, o) => {
                if (r.has(e)) return
                if ((r.add(e), A.has(e))) return
                const i = new Map(o)
                for (const t of e.dependencies.values())
                  e.peerNames.has(t.name) || i.set(t.name, t)
                for (const r of e.originalDependencies.values()) {
                  const n = i.get(r.name),
                    s = () =>
                      '' +
                      Array.from(A)
                        .concat([e])
                        .map(e => B(e.locator))
                        .join('→')
                  if (e.peerNames.has(r.name)) {
                    const e = o.get(r.name)
                    ;(e === n && e && e.ident === r.ident) ||
                      t.push(
                        `${s()} - broken peer promise: expected ${
                          r.ident
                        } but found ${e ? e.ident : e}`
                      )
                  } else
                    n
                      ? n.ident !== r.ident &&
                        t.push(
                          `${s()} - broken require promise for ${
                            r.name
                          }: expected ${r.ident}, but found: ${n.ident}`
                        )
                      : t.push(
                          `${s()} - broken require promise: no required dependency ${
                            r.locator
                          } found`
                        )
                }
                A.add(e)
                for (const t of e.dependencies.values())
                  e.peerNames.has(t.name) || n(t, i)
                A.delete(e)
              }
            return n(e, e.dependencies), t.join('\n')
          },
          C = (e, t) => {
            const { identName: r, name: A, reference: n, peerNames: o } = e,
              i = {
                name: A,
                references: new Set([n]),
                locator: s(r, n),
                ident: a(r, n),
                dependencies: new Map(),
                originalDependencies: new Map(),
                hoistedDependencies: new Map(),
                peerNames: new Set(o),
                reasons: new Map(),
                decoupled: !0,
                isHoistBorder: !0,
              },
              c = new Map([[e, i]]),
              g = (e, r) => {
                let A = c.get(e)
                const n = !!A
                if (!A) {
                  const {
                      name: n,
                      identName: o,
                      reference: i,
                      peerNames: g,
                    } = e,
                    l = t.hoistingLimits.get(r.locator)
                  ;(A = {
                    name: n,
                    references: new Set([i]),
                    locator: s(o, i),
                    ident: a(o, i),
                    dependencies: new Map(),
                    originalDependencies: new Map(),
                    hoistedDependencies: new Map(),
                    peerNames: new Set(g),
                    reasons: new Map(),
                    decoupled: !0,
                    isHoistBorder: !!l && l.has(n),
                  }),
                    c.set(e, A)
                }
                if (
                  (r.dependencies.set(e.name, A),
                  r.originalDependencies.set(e.name, A),
                  n)
                ) {
                  const e = new Set(),
                    t = r => {
                      if (!e.has(r)) {
                        e.add(r), (r.decoupled = !1)
                        for (const e of r.dependencies.values())
                          r.peerNames.has(e.name) || t(e)
                      }
                    }
                  t(A)
                } else for (const t of e.dependencies) g(t, A)
              }
            for (const t of e.dependencies) g(t, i)
            return i
          },
          f = e => e.substring(0, e.indexOf('@', 1)),
          I = e => {
            const t = {
                name: e.name,
                identName: f(e.locator),
                references: new Set(e.references),
                dependencies: new Set(),
              },
              r = new Set([e]),
              A = (e, t, n) => {
                const o = r.has(e)
                let i
                if (t === e) i = n
                else {
                  const { name: t, references: r, locator: A } = e
                  i = {
                    name: t,
                    identName: f(A),
                    references: r,
                    dependencies: new Set(),
                  }
                }
                if ((n.dependencies.add(i), !o)) {
                  r.add(e)
                  for (const t of e.dependencies.values())
                    e.peerNames.has(t.name) || A(t, e, i)
                  r.delete(e)
                }
              }
            for (const r of e.dependencies.values()) A(r, e, t)
            return t
          },
          E = e => {
            const t = new Map(),
              r = new Set([e]),
              A = e => {
                const r = (e => `${e.name}@${e.ident}`)(e)
                let A = t.get(r)
                return (
                  A ||
                    ((A = { dependents: new Set(), peerDependents: new Set() }),
                    t.set(r, A)),
                  A
                )
              },
              n = (e, t) => {
                const o = !!r.has(t)
                if ((A(t).dependents.add(e.ident), !o)) {
                  r.add(t)
                  for (const e of t.dependencies.values())
                    if (t.peerNames.has(e.name)) {
                      A(e).peerDependents.add(t.ident)
                    } else n(t, e)
                }
              }
            for (const t of e.dependencies.values())
              e.peerNames.has(t.name) || n(e, t)
            return t
          },
          B = e => {
            const t = e.indexOf('@', 1),
              r = e.substring(0, t),
              A = e.substring(t + 1)
            if ('workspace:.' === A) return '.'
            if (A) {
              const e = (A.indexOf('#') > 0 ? A.split('#')[1] : A).replace(
                'npm:',
                ''
              )
              return A.startsWith('virtual') ? `v:${r}@${e}` : `${r}@${e}`
            }
            return '' + r
          },
          y = e => {
            let t = 0
            const r = (e, A, n = '') => {
              if (t > 5e4 || A.has(e)) return ''
              t++
              const o = Array.from(e.dependencies.values())
              let i = ''
              A.add(e)
              for (let t = 0; t < o.length; t++) {
                const s = o[t]
                if (!e.peerNames.has(s.name)) {
                  const a = e.reasons.get(s.name),
                    c = f(s.locator)
                  ;(i += `${n}${t < o.length - 1 ? '├─' : '└─'}${
                    (A.has(s) ? '>' : '') +
                    (c !== s.name ? `a:${s.name}:` : '') +
                    B(s.locator) +
                    (a ? ' ' + a : '')
                  }\n`),
                    (i += r(s, A, `${n}${t < o.length - 1 ? '│ ' : '  '}`))
                }
              }
              return A.delete(e), i
            }
            return (
              r(e, new Set()) +
              (t > 5e4
                ? '\nTree is too large, part of the tree has been dunped\n'
                : '')
            )
          }
        var m, w
        !(function (e) {
          ;(e.HARD = 'HARD'), (e.SOFT = 'SOFT')
        })(m || (m = {})),
          (function (e) {
            ;(e.WORKSPACES = 'workspaces'),
              (e.DEPENDENCIES = 'dependencies'),
              (e.NONE = 'none')
          })(w || (w = {}))
        const Q = (e, t) => {
            const { packageTree: r, hoistingLimits: A } = b(e, t),
              n = ((e, t = {}) => {
                const r =
                    t.debugLevel ||
                    Number(process.env.NM_DEBUG_LEVEL || c.NONE),
                  A = {
                    check: t.check || r >= c.INTENSIVE_CHECK,
                    debugLevel: r,
                    hoistingLimits: t.hoistingLimits || new Map(),
                  }
                A.debugLevel >= c.PERF && console.time('hoist')
                const n = C(e, A)
                if (
                  (u(n, [n], new Set([n.locator]), A),
                  A.debugLevel >= c.PERF && console.timeEnd('hoist'),
                  A.debugLevel >= c.CHECK)
                ) {
                  const e = d(n)
                  if (e)
                    throw new Error(`${e}, after hoisting finished:\n${y(n)}`)
                }
                return A.debugLevel >= c.REASONS && console.log(y(n)), I(n)
              })(r, { hoistingLimits: A })
            return v(e, n, t)
          },
          D = e => `${e.name}@${e.reference}`
        const b = (e, t) => {
          const r = e.getDependencyTreeRoots(),
            A = new Map(),
            n = new Map(),
            s = e.getPackageInformation(e.topLevel)
          if (null === s)
            throw new Error(
              'Assertion failed: Expected the top-level package to have been registered'
            )
          const a = e.findPackageLocator(s.packageLocation)
          if (null === a)
            throw new Error(
              'Assertion failed: Expected the top-level package to have a physical locator'
            )
          const c = o.cS.toPortablePath(s.packageLocation),
            g = D(a)
          if (t.project) {
            const e = { children: new Map() },
              r = t.project.cwd.split(o.y1.sep)
            for (const [A, n] of t.project.workspacesByCwd) {
              const t = A.split(o.y1.sep).slice(r.length)
              let s = e
              for (const e of t) {
                let t = s.children.get(e)
                t || ((t = { children: new Map() }), s.children.set(e, t)),
                  (s = t)
              }
              s.workspaceLocator = {
                name: i.stringifyIdent(n.anchoredLocator),
                reference: n.anchoredLocator.reference,
              }
            }
            const A = (e, t) => {
              if (e.workspaceLocator) {
                const r = D(t)
                let A = n.get(r)
                A || ((A = new Set()), n.set(r, A)), A.add(e.workspaceLocator)
              }
              for (const r of e.children.values()) A(r, e.workspaceLocator || t)
            }
            for (const t of e.children.values()) A(t, e.workspaceLocator)
          } else
            for (const e of r)
              if (e.name !== a.name || e.reference !== a.reference) {
                let t = n.get(g)
                t || ((t = new Set()), n.set(g, t)), t.add(e)
              }
          const l = {
              name: a.name,
              identName: a.name,
              reference: a.reference,
              peerNames: s.packagePeers,
              dependencies: new Set(),
            },
            u = new Map(),
            h = (r, s, g, p, d, C, f) => {
              var I, E
              const B = ((e, t) => `${D(t)}:${e}`)(r, g)
              let y = u.get(B)
              const m = !!y
              if (
                (m ||
                  g.name !== a.name ||
                  g.reference !== a.reference ||
                  ((y = l), u.set(B, l)),
                y ||
                  ((y = {
                    name: r,
                    identName: g.name,
                    reference: g.reference,
                    dependencies: new Set(),
                    peerNames: s.packagePeers,
                  }),
                  u.set(B, y)),
                f)
              ) {
                const e = D({ name: p.identName, reference: p.reference }),
                  t = A.get(e) || new Set()
                A.set(e, t), t.add(y.name)
              }
              const Q = new Map(s.packageDependencies)
              if (t.project) {
                const e = t.project.workspacesByCwd.get(
                  o.cS.toPortablePath(s.packageLocation.slice(0, -1))
                )
                if (e) {
                  const t = new Set([
                    ...Array.from(e.manifest.peerDependencies.values(), e =>
                      i.stringifyIdent(e)
                    ),
                    ...Array.from(e.manifest.peerDependenciesMeta.keys()),
                  ])
                  for (const e of t)
                    Q.has(e) || (Q.set(e, d.get(e) || null), y.peerNames.add(e))
                }
              }
              const b = D(g),
                v = n.get(b)
              if (v) for (const e of v) Q.set(e.name + '$wsroot$', e.reference)
              p.dependencies.add(y)
              const S =
                t.pnpifyFs ||
                !(function (e) {
                  let t = i.parseDescriptor(e)
                  return (
                    i.isVirtualDescriptor(t) &&
                      (t = i.devirtualizeDescriptor(t)),
                    t.range.startsWith('portal:')
                  )
                })(B)
              if (!m && S)
                for (const [r, A] of Q)
                  if (null !== A) {
                    const n = e.getLocator(r, A),
                      i = e.getLocator(r.replace('$wsroot$', ''), A),
                      s = e.getPackageInformation(i)
                    if (null === s)
                      throw new Error(
                        'Assertion failed: Expected the package to have been registered'
                      )
                    const a =
                        null === (I = t.hoistingLimitsByCwd) || void 0 === I
                          ? void 0
                          : I.get(C),
                      g =
                        o.y1.relative(
                          c,
                          o.cS.toPortablePath(s.packageLocation)
                        ) || o.LZ.dot,
                      l =
                        null === (E = t.hoistingLimitsByCwd) || void 0 === E
                          ? void 0
                          : E.get(g),
                      u =
                        a === w.DEPENDENCIES ||
                        l === w.DEPENDENCIES ||
                        l === w.WORKSPACES
                    h(r, s, n, y, Q, g, u)
                  }
            }
          return (
            h(a.name, s, a, l, s.packageDependencies, o.LZ.dot, !1),
            { packageTree: l, hoistingLimits: A }
          )
        }
        const v = (e, t, r) => {
          const A = new Map(),
            n = (t, A) => {
              const { linkType: n, target: i } = (function (e, t, r) {
                const A = t.getLocator(
                    e.name.replace('$wsroot$', ''),
                    e.reference
                  ),
                  n = t.getPackageInformation(A)
                if (null === n)
                  throw new Error(
                    'Assertion failed: Expected the package to be registered'
                  )
                let i, s
                if (r.pnpifyFs)
                  (s = o.cS.toPortablePath(n.packageLocation)), (i = m.SOFT)
                else {
                  const r =
                    t.resolveVirtual &&
                    e.reference &&
                    e.reference.startsWith('virtual:')
                      ? t.resolveVirtual(n.packageLocation)
                      : n.packageLocation
                  ;(s = o.cS.toPortablePath(r || n.packageLocation)),
                    (i = n.linkType)
                }
                return { linkType: i, target: s }
              })(t, e, r)
              return { locator: D(t), target: i, linkType: n, aliases: A }
            },
            s = e => {
              const [t, r] = e.split('/')
              return r
                ? { scope: (0, o.Zu)(t), name: (0, o.Zu)(r) }
                : { scope: null, name: (0, o.Zu)(t) }
            },
            a = new Set(),
            c = (e, t) => {
              if (!a.has(e)) {
                a.add(e)
                for (const r of e.dependencies) {
                  if (
                    r === e ||
                    (e.identName.endsWith('$wsroot$') &&
                      r.identName === e.identName.replace('$wsroot$', ''))
                  )
                    continue
                  const a = Array.from(r.references).sort(),
                    g = { name: r.identName, reference: a[0] },
                    { name: l, scope: u } = s(r.name),
                    h = u ? [u, l] : [l],
                    p = o.y1.join(t, 'node_modules'),
                    d = o.y1.join(p, ...h),
                    C = n(g, a.slice(1))
                  if (!r.name.endsWith('$wsroot$')) {
                    const e = A.get(d)
                    if (e) {
                      if (e.dirList)
                        throw new Error(
                          `Assertion failed: ${d} cannot merge dir node with leaf node`
                        )
                      {
                        const t = i.parseLocator(e.locator),
                          r = i.parseLocator(C.locator)
                        if (e.linkType !== C.linkType)
                          throw new Error(
                            `Assertion failed: ${d} cannot merge nodes with different link types`
                          )
                        if (t.identHash !== r.identHash)
                          throw new Error(
                            `Assertion failed: ${d} cannot merge nodes with different idents ${i.stringifyLocator(
                              t
                            )} and ${i.stringifyLocator(r)}`
                          )
                        C.aliases = [
                          ...C.aliases,
                          ...e.aliases,
                          i.parseLocator(e.locator).reference,
                        ]
                      }
                    }
                    A.set(d, C)
                    const t = d.split('/'),
                      r = t.indexOf('node_modules')
                    let n = t.length - 1
                    for (; r >= 0 && n > r; ) {
                      const e = o.cS.toPortablePath(
                          t.slice(0, n).join(o.y1.sep)
                        ),
                        r = (0, o.Zu)(t[n]),
                        i = A.get(e)
                      if (i) {
                        if (i.dirList) {
                          if (i.dirList.has(r)) break
                          i.dirList.add(r)
                        }
                      } else A.set(e, { dirList: new Set([r]) })
                      n--
                    }
                  }
                  c(r, C.linkType === m.SOFT ? C.target : d)
                }
              }
            },
            g = n({ name: t.name, reference: Array.from(t.references)[0] }, []),
            l = g.target
          return A.set(l, g), c(t, l), A
        }
        var S = r(92659),
          k = r(32485),
          N = r(73632),
          F = r(46611),
          K = r(35691),
          M = r(43896),
          R = r(17674),
          x = r(53660),
          L = r(65281),
          P = r(11640),
          O = r(83228),
          U = r(58069),
          T = r.n(U),
          j = r(40822),
          Y = r(35747),
          G = r.n(Y)
        const H = 'node_modules'
        class J {
          constructor(e) {
            ;(this.opts = e),
              (this.localStore = new Map()),
              (this.customData = { store: new Map() })
          }
          getCustomDataKey() {
            return JSON.stringify({ name: 'NodeModulesInstaller', version: 1 })
          }
          attachCustomData(e) {
            this.customData = e
          }
          async installPackage(e, t) {
            var r
            const A = o.y1.resolve(t.packageFs.getRealPath(), t.prefixPath)
            let n = this.customData.store.get(e.locatorHash)
            if (
              (void 0 === n &&
                ((n = await (async function (e, t) {
                  var r
                  const A =
                      null !==
                        (r = await F.G.tryFind(t.prefixPath, {
                          baseFs: t.packageFs,
                        })) && void 0 !== r
                        ? r
                        : new F.G(),
                    n = new Set(['preinstall', 'install', 'postinstall'])
                  for (const e of A.scripts.keys())
                    n.has(e) || A.scripts.delete(e)
                  return {
                    manifest: {
                      bin: A.bin,
                      os: A.os,
                      cpu: A.cpu,
                      scripts: A.scripts,
                    },
                    misc: {
                      extractHint: O.jsInstallUtils.getExtractHint(t),
                      hasBindingGyp: O.jsInstallUtils.hasBindingGyp(t),
                    },
                  }
                })(0, t)),
                e.linkType === k.Un.HARD &&
                  this.customData.store.set(e.locatorHash, n)),
              !O.jsInstallUtils.checkAndReportManifestCompatibility(
                e,
                n,
                'link',
                {
                  configuration: this.opts.project.configuration,
                  report: this.opts.report,
                }
              ))
            )
              return { packageLocation: null, buildDirective: null }
            const s = new Map(),
              a = new Set()
            if (
              (s.has(i.stringifyIdent(e)) ||
                s.set(i.stringifyIdent(e), e.reference),
              i.isVirtualLocator(e))
            )
              for (const t of e.peerDependencies.values())
                s.set(i.stringifyIdent(t), null), a.add(i.stringifyIdent(t))
            const c = {
              packageLocation: o.cS.fromPortablePath(A) + '/',
              packageDependencies: s,
              packagePeers: a,
              linkType: e.linkType,
              discardFromLookup:
                null !== (r = t.discardFromLookup) && void 0 !== r && r,
            }
            return (
              this.localStore.set(e.locatorHash, {
                pkg: e,
                customPackageData: n,
                dependencyMeta: this.opts.project.getDependencyMeta(
                  e,
                  e.version
                ),
                pnpNode: c,
              }),
              { packageLocation: A, buildDirective: null }
            )
          }
          async attachInternalDependencies(e, t) {
            const r = this.localStore.get(e.locatorHash)
            if (void 0 === r)
              throw new Error(
                'Assertion failed: Expected information object to have been registered'
              )
            for (const [e, A] of t) {
              const t = i.areIdentsEqual(e, A)
                ? A.reference
                : [i.requirableIdent(A), A.reference]
              r.pnpNode.packageDependencies.set(i.requirableIdent(e), t)
            }
          }
          async attachExternalDependents(e, t) {
            throw new Error(
              "External dependencies haven't been implemented for the node-modules linker"
            )
          }
          async finalizeInstall() {
            if (
              'node-modules' !==
              this.opts.project.configuration.get('nodeLinker')
            )
              return
            const e = new R.p({
              baseFs: new x.A({
                libzip: await (0, L.getLibzipPromise)(),
                maxOpenFiles: 80,
                readOnlyArchives: !0,
              }),
            })
            let t = await q(this.opts.project)
            if (null === t) {
              const e = this.opts.project.configuration.get('bstatePath')
              ;(await M.xfs.existsPromise(e)) && (await M.xfs.unlinkPromise(e)),
                (t = {
                  locatorMap: new Map(),
                  binSymlinks: new Map(),
                  locationTree: new Map(),
                })
            }
            const r = new Map(
                this.opts.project.workspaces.map(e => {
                  var t, r
                  let A = this.opts.project.configuration.get(
                    'nmHoistingLimits'
                  )
                  try {
                    A = N.validateEnum(
                      w,
                      null !==
                        (r =
                          null === (t = e.manifest.installConfig) ||
                          void 0 === t
                            ? void 0
                            : t.hoistingLimits) && void 0 !== r
                        ? r
                        : A
                    )
                  } catch (t) {
                    const r = i.prettyWorkspace(
                      this.opts.project.configuration,
                      e
                    )
                    this.opts.report.reportWarning(
                      S.b.INVALID_MANIFEST,
                      `${r}: Invalid 'installConfig.hoistingLimits' value. Expected one of ${Object.values(
                        w
                      ).join(', ')}, using default: "${A}"`
                    )
                  }
                  return [e.relativeCwd, A]
                })
              ),
              A = (e => {
                const t = new Map()
                for (const [r, A] of e.entries())
                  if (!A.dirList) {
                    let e = t.get(A.locator)
                    e ||
                      ((e = {
                        target: A.target,
                        linkType: A.linkType,
                        locations: [],
                        aliases: A.aliases,
                      }),
                      t.set(A.locator, e)),
                      e.locations.push(r)
                  }
                for (const e of t.values())
                  e.locations = e.locations.sort((e, t) => {
                    const r = e.split(o.y1.delimiter).length,
                      A = t.split(o.y1.delimiter).length
                    return r !== A ? A - r : t.localeCompare(e)
                  })
                return t
              })(
                Q(
                  {
                    VERSIONS: { std: 1 },
                    topLevel: { name: null, reference: null },
                    getLocator: (e, t) =>
                      Array.isArray(t)
                        ? { name: t[0], reference: t[1] }
                        : { name: e, reference: t },
                    getDependencyTreeRoots: () =>
                      this.opts.project.workspaces.map(e => {
                        const t = e.anchoredLocator
                        return {
                          name: i.stringifyIdent(e.locator),
                          reference: t.reference,
                        }
                      }),
                    getPackageInformation: e => {
                      const t =
                          null === e.reference
                            ? this.opts.project.topLevelWorkspace
                                .anchoredLocator
                            : i.makeLocator(i.parseIdent(e.name), e.reference),
                        r = this.localStore.get(t.locatorHash)
                      if (void 0 === r)
                        throw new Error(
                          'Assertion failed: Expected the package reference to have been registered'
                        )
                      return r.pnpNode
                    },
                    findPackageLocator: e => {
                      const t = this.opts.project.tryWorkspaceByCwd(
                        o.cS.toPortablePath(e)
                      )
                      if (null !== t) {
                        const e = t.anchoredLocator
                        return {
                          name: i.stringifyIdent(e),
                          reference: e.reference,
                        }
                      }
                      throw new Error('Assertion failed: Unimplemented')
                    },
                    resolveToUnqualified: () => {
                      throw new Error('Assertion failed: Unimplemented')
                    },
                    resolveUnqualified: () => {
                      throw new Error('Assertion failed: Unimplemented')
                    },
                    resolveRequest: () => {
                      throw new Error('Assertion failed: Unimplemented')
                    },
                    resolveVirtual: e =>
                      o.cS.fromPortablePath(
                        R.p.resolveVirtual(o.cS.toPortablePath(e))
                      ),
                  },
                  {
                    pnpifyFs: !1,
                    hoistingLimitsByCwd: r,
                    project: this.opts.project,
                  }
                )
              )
            await (async function (
              e,
              t,
              { baseFs: r, project: A, report: n, loadManifest: s }
            ) {
              const a = o.y1.join(A.cwd, H),
                { locationTree: c, binSymlinks: g } = (function (e, t) {
                  const r = new Map([...e]),
                    A = new Map([...t])
                  for (const [t, r] of e) {
                    const e = o.y1.join(t, H)
                    if (!M.xfs.existsSync(e)) {
                      r.children.delete(H)
                      for (const t of A.keys())
                        null !== o.y1.contains(e, t) && A.delete(t)
                    }
                  }
                  return { locationTree: r, binSymlinks: A }
                })(e.locationTree, e.binSymlinks),
                l = V(t, { skipPrefix: A.cwd }),
                u = [],
                h = async ({ srcDir: e, dstDir: t, linkType: A }) => {
                  const n = (async () => {
                    try {
                      A === k.Un.SOFT
                        ? (await M.xfs.mkdirPromise(o.y1.dirname(t), {
                            recursive: !0,
                          }),
                          await X(o.y1.resolve(e), t))
                        : await _(t, e, { baseFs: r })
                    } catch (r) {
                      throw (
                        ((r.message = `While persisting ${e} -> ${t} ${r.message}`),
                        r)
                      )
                    } finally {
                      I.tick()
                    }
                  })().then(() => u.splice(u.indexOf(n), 1))
                  u.push(n), u.length > 4 && (await Promise.race(u))
                },
                p = async (e, t, r) => {
                  const A = (async () => {
                    const A = async (e, t, r) => {
                      try {
                        ;(r && r.innerLoop) ||
                          (await M.xfs.mkdirPromise(t, { recursive: !0 }))
                        const n = await M.xfs.readdirPromise(e, {
                          withFileTypes: !0,
                        })
                        for (const i of n) {
                          if (!((r && r.innerLoop) || '.bin' !== i.name))
                            continue
                          const n = o.y1.join(e, i.name),
                            s = o.y1.join(t, i.name)
                          i.isDirectory()
                            ? (i.name !== H || (r && r.innerLoop)) &&
                              (await M.xfs.mkdirPromise(s, { recursive: !0 }),
                              await A(n, s, { innerLoop: !0 }))
                            : await M.xfs.copyFilePromise(
                                n,
                                s,
                                G().constants.COPYFILE_FICLONE
                              )
                        }
                      } catch (A) {
                        throw (
                          ((r && r.innerLoop) ||
                            (A.message = `While cloning ${e} -> ${t} ${A.message}`),
                          A)
                        )
                      } finally {
                        ;(r && r.innerLoop) || I.tick()
                      }
                    }
                    await A(e, t, r)
                  })().then(() => u.splice(u.indexOf(A), 1))
                  u.push(A), u.length > 4 && (await Promise.race(u))
                },
                d = async (e, t, r) => {
                  if (r)
                    for (const [A, n] of t.children) {
                      const t = r.children.get(A)
                      await d(o.y1.join(e, A), n, t)
                    }
                  else
                    t.children.has(H) &&
                      (await z(o.y1.join(e, H), { contentsOnly: !1 })),
                      await z(e, { contentsOnly: e === a })
                }
              for (const [e, t] of c) {
                const r = l.get(e)
                for (const [A, n] of t.children) {
                  if ('.' === A) continue
                  const t = r ? r.children.get(A) : r
                  await d(o.y1.join(e, A), n, t)
                }
              }
              const C = async (e, t, r) => {
                if (r) {
                  $(t.locator, r.locator) ||
                    (await z(e, { contentsOnly: t.linkType === k.Un.HARD }))
                  for (const [A, n] of t.children) {
                    const t = r.children.get(A)
                    await C(o.y1.join(e, A), n, t)
                  }
                } else
                  t.children.has(H) &&
                    (await z(o.y1.join(e, H), { contentsOnly: !0 })),
                    await z(e, { contentsOnly: t.linkType === k.Un.HARD })
              }
              for (const [e, t] of l) {
                const r = c.get(e)
                for (const [A, n] of t.children) {
                  if ('.' === A) continue
                  const t = r ? r.children.get(A) : r
                  await C(o.y1.join(e, A), n, t)
                }
              }
              const f = []
              for (const [r, { locations: n }] of e.locatorMap.entries())
                for (const e of n) {
                  const { locationRoot: n, segments: i } = W(e, {
                    skipPrefix: A.cwd,
                  })
                  let s = l.get(n),
                    a = n
                  if (s) {
                    for (const e of i)
                      if (((a = o.y1.join(a, e)), (s = s.children.get(e)), !s))
                        break
                    if (s && !$(s.locator, r)) {
                      const e = t.get(s.locator),
                        r = e.target,
                        A = a,
                        n = e.linkType
                      r !== A && f.push({ srcDir: r, dstDir: A, linkType: n })
                    }
                  }
                }
              for (const [e, { locations: r }] of t.entries())
                for (const n of r) {
                  const { locationRoot: r, segments: i } = W(n, {
                    skipPrefix: A.cwd,
                  })
                  let s = c.get(r),
                    a = l.get(r),
                    g = r
                  const u = t.get(e),
                    h = u.target,
                    p = n
                  if (h === p) continue
                  const d = u.linkType
                  for (const e of i) a = a.children.get(e)
                  if (s) {
                    for (const e of i)
                      if (
                        ((g = o.y1.join(g, e)), (s = s.children.get(e)), !s)
                      ) {
                        f.push({ srcDir: h, dstDir: p, linkType: d })
                        break
                      }
                  } else f.push({ srcDir: h, dstDir: p, linkType: d })
                }
              const I = K.yG.progressViaCounter(f.length),
                E = n.reportProgress(I)
              try {
                const e = new Map()
                for (const t of f)
                  (t.linkType !== k.Un.SOFT && e.has(t.srcDir)) ||
                    (e.set(t.srcDir, t.dstDir), await h({ ...t }))
                await Promise.all(u), (u.length = 0)
                for (const t of f) {
                  const r = e.get(t.srcDir)
                  t.linkType !== k.Un.SOFT &&
                    t.dstDir !== r &&
                    (await p(r, t.dstDir))
                }
                await Promise.all(u),
                  await M.xfs.mkdirPromise(a, { recursive: !0 })
                const r = await (async function (e, t, r, { loadManifest: A }) {
                  const n = new Map()
                  for (const [t, { locations: r }] of e) {
                    const e = Z(t) ? null : await A(t, r[0]),
                      i = new Map()
                    if (e)
                      for (const [t, A] of e.bin) {
                        const e = o.y1.join(r[0], A)
                        '' !== A && M.xfs.existsSync(e) && i.set(t, A)
                      }
                    n.set(t, i)
                  }
                  const i = new Map(),
                    s = (e, t, A) => {
                      const a = new Map(),
                        c = o.y1.contains(r, e)
                      if (A.locator && null !== c) {
                        const t = n.get(A.locator)
                        for (const [r, A] of t) {
                          const t = o.y1.join(e, o.cS.toPortablePath(A))
                          a.set((0, o.Zu)(r), t)
                        }
                        for (const [t, r] of A.children) {
                          const A = o.y1.join(e, t),
                            n = s(A, A, r)
                          n.size > 0 &&
                            i.set(
                              e,
                              new Map([...(i.get(e) || new Map()), ...n])
                            )
                        }
                      } else
                        for (const [r, n] of A.children) {
                          const A = s(o.y1.join(e, r), t, n)
                          for (const [e, t] of A) a.set(e, t)
                        }
                      return a
                    }
                  for (const [e, r] of t) {
                    const t = s(e, e, r)
                    t.size > 0 &&
                      i.set(e, new Map([...(i.get(e) || new Map()), ...t]))
                  }
                  return i
                })(t, l, A.cwd, { loadManifest: s })
                await (async function (e, t) {
                  for (const r of e.keys())
                    if (!t.has(r)) {
                      const e = o.y1.join(r, H, '.bin')
                      await M.xfs.removePromise(e)
                    }
                  for (const [r, A] of t) {
                    const t = o.y1.join(r, H, '.bin'),
                      n = e.get(r) || new Map()
                    await M.xfs.mkdirPromise(t, { recursive: !0 })
                    for (const e of n.keys())
                      A.has(e) ||
                        (await M.xfs.removePromise(o.y1.join(t, e)),
                        'win32' === process.platform &&
                          (await M.xfs.removePromise(
                            o.y1.join(t, (0, o.Zu)(e + '.cmd'))
                          )))
                    for (const [e, r] of A) {
                      const A = n.get(e),
                        i = o.y1.join(t, e)
                      A !== r &&
                        ('win32' === process.platform
                          ? await T()(
                              o.cS.fromPortablePath(r),
                              o.cS.fromPortablePath(i),
                              { createPwshFile: !1 }
                            )
                          : (await M.xfs.removePromise(i),
                            await X(r, i),
                            await M.xfs.chmodPromise(r, 493)))
                    }
                  }
                })(g, r),
                  await (async function (e, t, r) {
                    let A = ''
                    ;(A +=
                      '# Warning: This file is automatically generated. Removing it is fine, but will\n'),
                      (A +=
                        '# cause your node_modules installation to become invalidated.\n'),
                      (A += '\n'),
                      (A += '__metadata:\n'),
                      (A += '  version: 1\n')
                    const n = Array.from(t.keys()).sort(),
                      s = i.stringifyLocator(
                        e.topLevelWorkspace.anchoredLocator
                      )
                    for (const i of n) {
                      const n = t.get(i)
                      ;(A += '\n'),
                        (A += JSON.stringify(i) + ':\n'),
                        (A += '  locations:\n')
                      for (const t of n.locations) {
                        const r = o.y1.contains(e.cwd, t)
                        if (null === r)
                          throw new Error(
                            `Assertion failed: Expected the path to be within the project (${t})`
                          )
                        A += `    - ${JSON.stringify(r)}\n`
                      }
                      if (n.aliases.length > 0) {
                        A += '  aliases:\n'
                        for (const e of n.aliases)
                          A += `    - ${JSON.stringify(e)}\n`
                      }
                      if (i === s && r.size > 0) {
                        A += '  bin:\n'
                        for (const [t, n] of r) {
                          const r = o.y1.contains(e.cwd, t)
                          if (null === r)
                            throw new Error(
                              `Assertion failed: Expected the path to be within the project (${t})`
                            )
                          A += `    ${JSON.stringify(r)}:\n`
                          for (const [e, r] of n) {
                            const n = o.y1.relative(o.y1.join(t, H), r)
                            A += `      ${JSON.stringify(e)}: ${JSON.stringify(
                              n
                            )}\n`
                          }
                        }
                      }
                    }
                    const a = e.cwd,
                      c = o.y1.join(a, H, '.yarn-state.yml')
                    await M.xfs.changeFilePromise(c, A, {
                      automaticNewlines: !0,
                    })
                  })(A, t, r)
              } finally {
                E.stop()
              }
            })(t, A, {
              baseFs: e,
              project: this.opts.project,
              report: this.opts.report,
              loadManifest: async e => {
                const t = i.parseLocator(e),
                  r = this.localStore.get(t.locatorHash)
                if (void 0 === r)
                  throw new Error(
                    'Assertion failed: Expected the slot to exist'
                  )
                return r.customPackageData.manifest
              },
            })
            const n = []
            for (const [e, t] of A.entries()) {
              if (Z(e)) continue
              const r = i.parseLocator(e),
                A = this.localStore.get(r.locatorHash)
              if (void 0 === A)
                throw new Error('Assertion failed: Expected the slot to exist')
              const o = O.jsInstallUtils.extractBuildScripts(
                A.pkg,
                A.customPackageData,
                A.dependencyMeta,
                {
                  configuration: this.opts.project.configuration,
                  report: this.opts.report,
                }
              )
              0 !== o.length &&
                n.push({
                  buildLocations: t.locations,
                  locatorHash: r.locatorHash,
                  buildDirective: o,
                })
            }
            return { customData: this.customData, records: n }
          }
        }
        async function q(e, { unrollAliases: t = !1 } = {}) {
          const r = e.cwd,
            A = o.y1.join(r, H, '.yarn-state.yml')
          if (!M.xfs.existsSync(A)) return null
          const n = (0, P.parseSyml)(await M.xfs.readFilePromise(A, 'utf8'))
          if (n.__metadata.version > 1) return null
          const s = new Map(),
            a = new Map()
          delete n.__metadata
          for (const [e, A] of Object.entries(n)) {
            const n = A.locations.map(e => o.y1.join(r, e)),
              c = A.bin
            if (c)
              for (const [e, t] of Object.entries(c)) {
                const A = o.y1.join(r, o.cS.toPortablePath(e)),
                  n = N.getMapWithDefault(a, A)
                for (const [e, r] of Object.entries(t))
                  n.set(
                    (0, o.Zu)(e),
                    o.cS.toPortablePath([A, H, r].join(o.y1.delimiter))
                  )
              }
            if (
              (s.set(e, {
                target: o.LZ.dot,
                linkType: k.Un.HARD,
                locations: n,
                aliases: A.aliases || [],
              }),
              t && A.aliases)
            )
              for (const t of A.aliases) {
                const { scope: r, name: A } = i.parseLocator(e),
                  a = i.makeLocator(i.makeIdent(r, A), t),
                  c = i.stringifyLocator(a)
                s.set(c, {
                  target: o.LZ.dot,
                  linkType: k.Un.HARD,
                  locations: n,
                  aliases: [],
                })
              }
          }
          return {
            locatorMap: s,
            binSymlinks: a,
            locationTree: V(s, { skipPrefix: e.cwd }),
          }
        }
        const z = async (e, t) => {
            if (e.split(o.y1.sep).indexOf(H) < 0)
              throw new Error(
                "Assertion failed: trying to remove dir that doesn't contain node_modules: " +
                  e
              )
            try {
              if (!t.innerLoop) {
                if ((await M.xfs.lstatPromise(e)).isSymbolicLink())
                  return void (await M.xfs.unlinkPromise(e))
              }
              const r = await M.xfs.readdirPromise(e, { withFileTypes: !0 })
              for (const A of r) {
                const r = o.y1.join(e, (0, o.Zu)(A.name))
                A.isDirectory()
                  ? (A.name !== H || (t && t.innerLoop)) &&
                    (await z(r, { innerLoop: !0, contentsOnly: !1 }))
                  : await M.xfs.unlinkPromise(r)
              }
              t.contentsOnly || (await M.xfs.rmdirPromise(e))
            } catch (e) {
              if ('ENOENT' !== e.code && 'ENOTEMPTY' !== e.code) throw e
            }
          },
          W = (e, { skipPrefix: t }) => {
            const r = o.y1.contains(t, e)
            if (null === r)
              throw new Error(
                `Assertion failed: Cannot process a path that isn't part of the requested prefix (${e} isn't within ${t})`
              )
            const A = r.split(o.y1.sep).filter(e => '' !== e),
              n = A.indexOf(H),
              i = A.slice(0, n).join(o.y1.sep)
            return { locationRoot: o.y1.join(t, i), segments: A.slice(n) }
          },
          V = (e, { skipPrefix: t }) => {
            const r = new Map()
            if (null === e) return r
            const A = () => ({ children: new Map(), linkType: k.Un.HARD })
            for (const [n, i] of e.entries()) {
              if (i.linkType === k.Un.SOFT) {
                if (null !== o.y1.contains(t, i.target)) {
                  const e = N.getFactoryWithDefault(r, i.target, A)
                  ;(e.locator = n), (e.linkType = i.linkType)
                }
              }
              for (const e of i.locations) {
                const { locationRoot: o, segments: s } = W(e, { skipPrefix: t })
                let a = N.getFactoryWithDefault(r, o, A)
                for (let e = 0; e < s.length; ++e) {
                  const t = s[e]
                  if ('.' !== t) {
                    const e = N.getFactoryWithDefault(a.children, t, A)
                    a.children.set(t, e), (a = e)
                  }
                  e === s.length - 1 &&
                    ((a.locator = n), (a.linkType = i.linkType))
                }
              }
            }
            return r
          },
          X = async (e, t) => {
            let r
            try {
              'win32' === process.platform && (r = M.xfs.lstatSync(e))
            } catch (e) {}
            'win32' != process.platform || (r && !r.isDirectory())
              ? M.xfs.symlinkPromise(o.y1.relative(o.y1.dirname(t), e), t)
              : M.xfs.symlinkPromise(e, t, 'junction')
          },
          _ = async (e, t, { baseFs: r, innerLoop: A }) => {
            await M.xfs.mkdirPromise(e, { recursive: !0 })
            const n = await r.readdirPromise(t, { withFileTypes: !0 }),
              i = async (e, t, A) => {
                if (A.isFile()) {
                  const A = await r.lstatPromise(t)
                  await r.copyFilePromise(t, e)
                  const n = 511 & A.mode
                  420 !== n && (await M.xfs.chmodPromise(e, n))
                } else {
                  if (!A.isSymbolicLink())
                    throw new Error(
                      `Unsupported file type (file: ${t}, mode: 0o${await M.xfs
                        .statSync(t)
                        .mode.toString(8)
                        .padStart(6, '0')})`
                    )
                  {
                    const A = await r.readlinkPromise(t)
                    await X(o.y1.resolve(o.y1.dirname(e), A), e)
                  }
                }
              }
            for (const s of n) {
              const n = o.y1.join(t, (0, o.Zu)(s.name)),
                a = o.y1.join(e, (0, o.Zu)(s.name))
              s.isDirectory()
                ? (s.name !== H || A) &&
                  (await _(a, n, { baseFs: r, innerLoop: !0 }))
                : await i(a, n, s)
            }
          }
        function Z(e) {
          let t = i.parseDescriptor(e)
          return (
            i.isVirtualDescriptor(t) && (t = i.devirtualizeDescriptor(t)),
            t.range.startsWith('link:')
          )
        }
        const $ = (e, t) => {
          if (!e || !t) return e === t
          let r = i.parseLocator(e)
          i.isVirtualLocator(r) && (r = i.devirtualizeLocator(r))
          let A = i.parseLocator(t)
          return (
            i.isVirtualLocator(A) && (A = i.devirtualizeLocator(A)),
            i.areLocatorsEqual(r, A)
          )
        }
        var ee = r(34432)
        class te extends O.PnpLinker {
          constructor() {
            super(...arguments), (this.mode = 'loose')
          }
          makeInstaller(e) {
            return new re(e)
          }
        }
        class re extends O.PnpInstaller {
          constructor() {
            super(...arguments), (this.mode = 'loose')
          }
          async finalizeInstallWithPnp(e) {
            if (this.opts.project.configuration.get('pnpMode') !== this.mode)
              return
            const t = new R.p({
                baseFs: new x.A({
                  libzip: await (0, L.getLibzipPromise)(),
                  maxOpenFiles: 80,
                  readOnlyArchives: !0,
                }),
              }),
              r = (0, ee.oC)(e, this.opts.project.cwd, t),
              A = Q(r, { pnpifyFs: !1, project: this.opts.project }),
              n = new Map()
            e.fallbackPool = n
            const s = (e, t) => {
                const r = i.parseLocator(t.locator),
                  A = i.stringifyIdent(r)
                A === e ? n.set(e, r.reference) : n.set(e, [A, r.reference])
              },
              a = o.y1.join(this.opts.project.cwd, o.QS.nodeModules),
              c = A.get(a)
            if (void 0 === c)
              throw new Error(
                'Assertion failed: Expected a root junction point'
              )
            if ('target' in c)
              throw new Error(
                'Assertion failed: Expected the root junction point to be a directory'
              )
            for (const e of c.dirList) {
              const t = o.y1.join(a, e),
                r = A.get(t)
              if (void 0 === r)
                throw new Error(
                  'Assertion failed: Expected the child to have been registered'
                )
              if ('target' in r) s(e, r)
              else
                for (const n of r.dirList) {
                  const r = o.y1.join(t, n),
                    i = A.get(r)
                  if (void 0 === i)
                    throw new Error(
                      'Assertion failed: Expected the subchild to have been registered'
                    )
                  if (!('target' in i))
                    throw new Error(
                      'Assertion failed: Expected the leaf junction to be a package'
                    )
                  s(`${e}/${n}`, i)
                }
            }
            return super.finalizeInstallWithPnp(e)
          }
        }
        const Ae = e => o.y1.join(e.cwd, '.pnp.js'),
          ne = {
            configuration: {
              nmHoistingLimits: {
                description:
                  'Prevent packages can be hoisted past specific levels',
                type: n.a2.STRING,
                values: [w.WORKSPACES, w.DEPENDENCIES, w.NONE],
                default: 'none',
              },
            },
            linkers: [
              class {
                supportsPackage(e, t) {
                  return (
                    'node-modules' === t.project.configuration.get('nodeLinker')
                  )
                }
                async findPackageLocation(e, t) {
                  const r = t.project.tryWorkspaceByLocator(e)
                  if (r) return r.cwd
                  const A = await q(t.project, { unrollAliases: !0 })
                  if (null === A)
                    throw new j.UsageError(
                      "Couldn't find the node_modules state file - running an install might help (findPackageLocation)"
                    )
                  const n = A.locatorMap.get(i.stringifyLocator(e))
                  if (!n) {
                    const r = new j.UsageError(
                      `Couldn't find ${i.prettyLocator(
                        t.project.configuration,
                        e
                      )} in the currently installed node_modules map - running an install might help`
                    )
                    throw ((r.code = 'LOCATOR_NOT_INSTALLED'), r)
                  }
                  return n.locations[0]
                }
                async findPackageLocator(e, t) {
                  const r = await q(t.project, { unrollAliases: !0 })
                  if (null === r) return null
                  const { locationRoot: A, segments: n } = W(o.y1.resolve(e), {
                    skipPrefix: t.project.cwd,
                  })
                  let s = r.locationTree.get(A)
                  if (!s) return null
                  let a = s.locator
                  for (const e of n) {
                    if (((s = s.children.get(e)), !s)) break
                    a = s.locator || a
                  }
                  return i.parseLocator(a)
                }
                makeInstaller(e) {
                  return new J(e)
                }
              },
              te,
            ],
          }
      },
      8190: (e, t, r) => {
        'use strict'
        r.r(t), r.d(t, { default: () => X })
        var A,
          n,
          o = r(39922),
          i = r(36370),
          s = r(25413),
          a = r(85824),
          c = r(62152),
          g = r(35691),
          l = r(92659),
          u = r(85875),
          h = r(15815),
          p = r(14224),
          d = r(40822)
        !(function (e) {
          ;(e.All = 'all'),
            (e.Production = 'production'),
            (e.Development = 'development')
        })(A || (A = {})),
          (function (e) {
            ;(e.Info = 'info'),
              (e.Low = 'low'),
              (e.Moderate = 'moderate'),
              (e.High = 'high'),
              (e.Critical = 'critical')
          })(n || (n = {}))
        var C = r(54143),
          f = r(73632),
          I = r(71643)
        const E = [n.Info, n.Low, n.Moderate, n.High, n.Critical]
        function B(e, t) {
          const r = [],
            A = new Set(),
            n = e => {
              A.has(e) || (A.add(e), r.push(e))
            }
          for (const e of t) n(e)
          const o = new Set()
          for (; r.length > 0; ) {
            const t = r.shift(),
              A = e.storedResolutions.get(t)
            if (void 0 === A)
              throw new Error(
                'Assertion failed: Expected the resolution to have been registered'
              )
            const i = e.storedPackages.get(A)
            if (i) {
              o.add(t)
              for (const e of i.dependencies.values()) n(e.descriptorHash)
            }
          }
          return o
        }
        function y(e, t, { all: r }) {
          const A = r ? e.workspaces : [t],
            n = A.map(e => e.manifest),
            o = new Set(
              n.map(e => [...e.dependencies].map(([e, t]) => e)).flat()
            ),
            i = new Set(
              n.map(e => [...e.devDependencies].map(([e, t]) => e)).flat()
            ),
            s = A.map(e => [...e.dependencies.values()]).flat(),
            a = s.filter(e => o.has(e.identHash)).map(e => e.descriptorHash),
            c = s.filter(e => i.has(e.identHash)).map(e => e.descriptorHash),
            g = B(e, a),
            l = B(e, c)
          return (u = l), (h = g), new Set([...u].filter(e => !h.has(e)))
          var u, h
        }
        function m(e) {
          const t = {}
          for (const r of e)
            t[C.stringifyIdent(r)] = C.parseRange(r.range).selector
          return t
        }
        function w(e) {
          if (void 0 === e) return new Set()
          const t = E.indexOf(e),
            r = E.slice(t)
          return new Set(r)
        }
        function Q(e, t) {
          var r
          const A = (function (e, t) {
            const r = w(t),
              A = {}
            for (const t of r) A[t] = e[t]
            return A
          })(e, t)
          for (const e of Object.keys(A))
            if (null !== (r = A[e]) && void 0 !== r && r) return !0
          return !1
        }
        class D extends s.BaseCommand {
          constructor() {
            super(...arguments),
              (this.all = !1),
              (this.recursive = !1),
              (this.environment = A.All),
              (this.json = !1),
              (this.severity = n.Info)
          }
          async execute() {
            const e = await o.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await a.I.find(e, this.context.cwd)
            if (!r) throw new s.WorkspaceRequiredError(t.cwd, this.context.cwd)
            await t.restoreInstallState()
            const n = (function (e, t, { all: r, environment: n }) {
                const o = r ? e.workspaces : [t],
                  i = []
                if ([A.All, A.Production].includes(n))
                  for (const e of o)
                    for (const t of e.manifest.dependencies.values()) i.push(t)
                const s = []
                if ([A.All, A.Development].includes(n))
                  for (const e of o)
                    for (const t of e.manifest.devDependencies.values())
                      s.push(t)
                return m(
                  [...i, ...s].filter(
                    e => null === C.parseRange(e.range).protocol
                  )
                )
              })(t, r, { all: this.all, environment: this.environment }),
              i = (function (e, t, { all: r }) {
                var A
                const n = y(e, t, { all: r }),
                  o = {}
                for (const t of e.storedPackages.values())
                  o[C.stringifyIdent(t)] = {
                    version:
                      null !== (A = t.version) && void 0 !== A ? A : '0.0.0',
                    integrity: t.identHash,
                    requires: m(t.dependencies.values()),
                    dev: n.has(C.convertLocatorToDescriptor(t).descriptorHash),
                  }
                return o
              })(t, r, { all: this.all })
            if (!this.recursive)
              for (const e of Object.keys(i))
                Object.prototype.hasOwnProperty.call(n, e)
                  ? (i[e].requires = {})
                  : delete i[e]
            const d = { requires: n, dependencies: i },
              E = p.npmConfigUtils.getPublishRegistry(r.manifest, {
                configuration: e,
              })
            let B
            const D = await c.h.start(
              { configuration: e, stdout: this.context.stdout },
              async () => {
                try {
                  B = await p.npmHttpUtils.post(
                    '/-/npm/v1/security/audits/quick',
                    d,
                    {
                      authType: p.npmHttpUtils.AuthType.NO_AUTH,
                      configuration: e,
                      jsonResponse: !0,
                      registry: E,
                    }
                  )
                } catch (e) {
                  throw 'HTTPError' !== e.name
                    ? e
                    : new g.lk(l.b.EXCEPTION, e.toString())
                }
              }
            )
            if (D.hasErrors()) return D.exitCode()
            const b = Q(B.metadata.vulnerabilities, this.severity)
            if (!this.json && b)
              return (
                u.emitTree(
                  (function (e, t) {
                    const r = {},
                      A = { children: r }
                    let n = Object.values(e.advisories)
                    if (null != t) {
                      const e = w(t)
                      n = n.filter(t => e.has(t.severity))
                    }
                    for (const e of f.sortMap(n, e => e.module_name))
                      r[e.module_name] = {
                        label: e.module_name,
                        value: I.tuple(
                          I.Type.RANGE,
                          e.findings.map(e => e.version).join(', ')
                        ),
                        children: {
                          Issue: {
                            label: 'Issue',
                            value: I.tuple(I.Type.NO_HINT, e.title),
                          },
                          URL: {
                            label: 'URL',
                            value: I.tuple(I.Type.URL, e.url),
                          },
                          Severity: {
                            label: 'Severity',
                            value: I.tuple(I.Type.NO_HINT, e.severity),
                          },
                          'Vulnerable Versions': {
                            label: 'Vulnerable Versions',
                            value: I.tuple(I.Type.RANGE, e.vulnerable_versions),
                          },
                          'Patched Versions': {
                            label: 'Patched Versions',
                            value: I.tuple(I.Type.RANGE, e.patched_versions),
                          },
                          Via: {
                            label: 'Via',
                            value: I.tuple(
                              I.Type.NO_HINT,
                              Array.from(
                                new Set(
                                  e.findings
                                    .map(e => e.paths)
                                    .flat()
                                    .map(e => e.split('>')[0])
                                )
                              ).join(', ')
                            ),
                          },
                          Recommendation: {
                            label: 'Recommendation',
                            value: I.tuple(
                              I.Type.NO_HINT,
                              e.recommendation.replace(/\n/g, ' ')
                            ),
                          },
                        },
                      }
                    return A
                  })(B, this.severity),
                  {
                    configuration: e,
                    json: this.json,
                    stdout: this.context.stdout,
                    separators: 2,
                  }
                ),
                1
              )
            return (
              await h.Pk.start(
                {
                  configuration: e,
                  includeFooter: !1,
                  json: this.json,
                  stdout: this.context.stdout,
                },
                async e => {
                  e.reportJson(B),
                    b || e.reportInfo(l.b.EXCEPTION, 'No audit suggestions')
                }
              )
            ).exitCode()
          }
        }
        ;(D.usage = d.Command.Usage({
          description:
            'perform a vulnerability audit against the installed packages',
          details: `\n      This command checks for known security reports on the packages you use. The reports are by default extracted from the npm registry, and may or may not be relevant to your actual program (not all vulnerabilities affect all code paths).\n\n      For consistency with our other commands the default is to only check the direct dependencies for the active workspace. To extend this search to all workspaces, use \`-A,--all\`. To extend this search to both direct and transitive dependencies, use \`-R,--recursive\`.\n\n      Applying the \`--severity\` flag will limit the audit table to vulnerabilities of the corresponding severity and above. Valid values are ${E.map(
            e => `\`${e}\``
          ).join(
            ', '
          )}.\n\n      If the \`--json\` flag is set, Yarn will print the output exactly as received from the registry. Regardless of this flag, the process will exit with a non-zero exit code if a report is found for the selected packages.\n\n      To understand the dependency tree requiring vulnerable packages, check the raw report with the \`--json\` flag or use \`yarn why <package>\` to get more information as to who depends on them.\n    `,
          examples: [
            [
              'Checks for known security issues with the installed packages. The output is a list of known issues.',
              'yarn npm audit',
            ],
            ['Audit dependencies in all workspaces', 'yarn npm audit --all'],
            [
              'Limit auditing to `dependencies` (excludes `devDependencies`)',
              'yarn npm audit --environment production',
            ],
            ['Show audit report as valid JSON', 'yarn npm audit --json'],
            [
              'Audit all direct and transitive dependencies',
              'yarn npm audit --recursive',
            ],
            [
              'Output moderate (or more severe) vulnerabilities',
              'yarn npm audit --severity moderate',
            ],
          ],
        })),
          (0, i.gn)(
            [d.Command.Boolean('-A,--all')],
            D.prototype,
            'all',
            void 0
          ),
          (0, i.gn)(
            [d.Command.Boolean('-R,--recursive')],
            D.prototype,
            'recursive',
            void 0
          ),
          (0, i.gn)(
            [d.Command.String('--environment')],
            D.prototype,
            'environment',
            void 0
          ),
          (0, i.gn)([d.Command.Boolean('--json')], D.prototype, 'json', void 0),
          (0, i.gn)(
            [d.Command.String('--severity')],
            D.prototype,
            'severity',
            void 0
          ),
          (0, i.gn)(
            [d.Command.Path('npm', 'audit')],
            D.prototype,
            'execute',
            null
          )
        var b = r(85622),
          v = r.n(b),
          S = r(53887),
          k = r.n(S),
          N = r(31669)
        class F extends s.BaseCommand {
          constructor() {
            super(...arguments), (this.json = !1)
          }
          async execute() {
            const e = await o.VK.find(this.context.cwd, this.context.plugins),
              { project: t } = await a.I.find(e, this.context.cwd),
              r =
                void 0 !== this.fields
                  ? new Set(['name', ...this.fields.split(/\s*,\s*/)])
                  : null,
              A = []
            let n = !1
            const i = await h.Pk.start(
              {
                configuration: e,
                includeFooter: !1,
                json: this.json,
                stdout: this.context.stdout,
              },
              async o => {
                for (const i of this.packages) {
                  let s
                  if ('.' === i) {
                    const e = t.topLevelWorkspace
                    if (!e.manifest.name)
                      throw new d.UsageError(
                        "Missing 'name' field in " +
                          v().join(e.cwd, 'package.json')
                      )
                    s = C.makeDescriptor(e.manifest.name, 'unknown')
                  } else s = C.parseDescriptor(i)
                  const a = p.npmHttpUtils.getIdentUrl(s)
                  let c
                  try {
                    c = K(
                      await p.npmHttpUtils.get(a, {
                        configuration: e,
                        ident: s,
                        jsonResponse: !0,
                      })
                    )
                  } catch (e) {
                    throw 'HTTPError' !== e.name
                      ? e
                      : 404 === e.response.statusCode
                      ? new g.lk(l.b.EXCEPTION, 'Package not found')
                      : new g.lk(l.b.EXCEPTION, e.toString())
                  }
                  const u = Object.keys(c.versions).sort(k().compareLoose)
                  let h = c['dist-tags'].latest || u[u.length - 1]
                  if (k().validRange(s.range)) {
                    const t = k().maxSatisfying(u, s.range)
                    null !== t
                      ? (h = t)
                      : (o.reportWarning(
                          l.b.UNNAMED,
                          `Unmet range ${C.prettyRange(
                            e,
                            s.range
                          )}; falling back to the latest version`
                        ),
                        (n = !0))
                  } else
                    'unknown' !== s.range &&
                      (o.reportWarning(
                        l.b.UNNAMED,
                        `Invalid range ${C.prettyRange(
                          e,
                          s.range
                        )}; falling back to the latest version`
                      ),
                      (n = !0))
                  const f = c.versions[h],
                    I = { ...c, ...f, version: h, versions: u }
                  let E
                  if (null !== r) {
                    E = {}
                    for (const t of r) {
                      const r = I[t]
                      void 0 !== r
                        ? (E[t] = r)
                        : (o.reportWarning(
                            l.b.EXCEPTION,
                            `The '${t}' field doesn't exist inside ${C.prettyIdent(
                              e,
                              s
                            )}'s informations`
                          ),
                          (n = !0))
                    }
                  } else
                    this.json ||
                      (delete I.dist, delete I.readme, delete I.users),
                      (E = I)
                  o.reportJson(E), this.json || A.push(E)
                }
              }
            )
            N.inspect.styles.name = 'cyan'
            for (const e of A)
              (e !== A[0] || n) && this.context.stdout.write('\n'),
                this.context.stdout.write(
                  (0, N.inspect)(e, { depth: 1 / 0, colors: !0, compact: !1 }) +
                    '\n'
                )
            return i.exitCode()
          }
        }
        function K(e) {
          if (Array.isArray(e)) {
            const t = []
            for (let r of e) (r = K(r)), r && t.push(r)
            return t
          }
          if ('object' == typeof e && null !== e) {
            const t = {}
            for (const r of Object.keys(e)) {
              if (r.startsWith('_')) continue
              const A = K(e[r])
              A && (t[r] = A)
            }
            return t
          }
          return e || null
        }
        ;(F.usage = d.Command.Usage({
          category: 'Npm-related commands',
          description: 'show information about a package',
          details:
            "\n      This command will fetch information about a package from the npm registry, and prints it in a tree format.\n\n      The package does not have to be installed locally, but needs to have been published (in particular, local changes will be ignored even for workspaces).\n\n      Append `@<range>` to the package argument to provide information specific to the latest version that satisfies the range. If the range is invalid or if there is no version satisfying the range, the command will print a warning and fall back to the latest version.\n\n      If the `-f,--fields` option is set, it's a comma-separated list of fields which will be used to only display part of the package informations.\n\n      By default, this command won't return the `dist`, `readme`, and `users` fields, since they are often very long. To explicitly request those fields, explicitly list them with the `--fields` flag or request the output in JSON mode.\n    ",
          examples: [
            [
              'Show all available information about react (except the `dist`, `readme`, and `users` fields)',
              'yarn npm info react',
            ],
            [
              'Show all available information about react as valid JSON (including the `dist`, `readme`, and `users` fields)',
              'yarn npm info react --json',
            ],
            [
              'Show all available information about react 16.12.0',
              'yarn npm info react@16.12.0',
            ],
            [
              'Show the description of react',
              'yarn npm info react --fields description',
            ],
            [
              'Show all available versions of react',
              'yarn npm info react --fields versions',
            ],
            ['Show the readme of react', 'yarn npm info react --fields readme'],
            [
              'Show a few fields of react',
              'yarn npm info react --fields homepage,repository',
            ],
          ],
        })),
          (0, i.gn)([d.Command.Rest()], F.prototype, 'packages', void 0),
          (0, i.gn)(
            [
              d.Command.String('-f,--fields', {
                description:
                  'A comma-separated list of manifest fields that should be displayed',
              }),
            ],
            F.prototype,
            'fields',
            void 0
          ),
          (0, i.gn)(
            [
              d.Command.Boolean('--json', {
                description: 'Format the output as an NDJSON stream',
              }),
            ],
            F.prototype,
            'json',
            void 0
          ),
          (0, i.gn)(
            [d.Command.Path('npm', 'info')],
            F.prototype,
            'execute',
            null
          )
        var M = r(61899)
        class R extends s.BaseCommand {
          constructor() {
            super(...arguments), (this.publish = !1)
          }
          async execute() {
            const e = await o.VK.find(this.context.cwd, this.context.plugins),
              t = await x({
                configuration: e,
                cwd: this.context.cwd,
                publish: this.publish,
                scope: this.scope,
              })
            return (
              await h.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async r => {
                  const A = await (async function ({
                      registry: e,
                      report: t,
                      stdin: r,
                      stdout: A,
                    }) {
                      if (process.env.TEST_ENV)
                        return {
                          name: process.env.TEST_NPM_USER || '',
                          password: process.env.TEST_NPM_PASSWORD || '',
                        }
                      t.reportInfo(l.b.UNNAMED, 'Logging in to ' + e)
                      let n = !1
                      e.match(/^https:\/\/npm\.pkg\.github\.com(\/|$)/) &&
                        (t.reportInfo(
                          l.b.UNNAMED,
                          "You seem to be using the GitHub Package Registry. Tokens must be generated with the 'repo', 'write:packages', and 'read:packages' permissions."
                        ),
                        (n = !0))
                      t.reportSeparator()
                      const { username: o, password: i } = await (0, M.prompt)([
                        {
                          type: 'input',
                          name: 'username',
                          message: 'Username:',
                          required: !0,
                          onCancel: () => process.exit(130),
                          stdin: r,
                          stdout: A,
                        },
                        {
                          type: 'password',
                          name: 'password',
                          message: n ? 'Token:' : 'Password:',
                          required: !0,
                          onCancel: () => process.exit(130),
                          stdin: r,
                          stdout: A,
                        },
                      ])
                      return t.reportSeparator(), { name: o, password: i }
                    })({
                      registry: t,
                      report: r,
                      stdin: this.context.stdin,
                      stdout: this.context.stdout,
                    }),
                    n =
                      '/-/user/org.couchdb.user:' + encodeURIComponent(A.name),
                    i = await p.npmHttpUtils.put(n, A, {
                      attemptedAs: A.name,
                      configuration: e,
                      registry: t,
                      jsonResponse: !0,
                      authType: p.npmHttpUtils.AuthType.NO_AUTH,
                    })
                  return (
                    await (async function (
                      e,
                      t,
                      { configuration: r, scope: A }
                    ) {
                      const n = e => r => {
                          const A = f.isIndexableObject(r) ? r : {},
                            n = A[e],
                            o = f.isIndexableObject(n) ? n : {}
                          return { ...A, [e]: { ...o, npmAuthToken: t } }
                        },
                        i = A ? { npmScopes: n(A) } : { npmRegistries: n(e) }
                      return await o.VK.updateHomeConfiguration(i)
                    })(t, i.token, { configuration: e, scope: this.scope }),
                    r.reportInfo(l.b.UNNAMED, 'Successfully logged in')
                  )
                }
              )
            ).exitCode()
          }
        }
        async function x({ scope: e, publish: t, configuration: r, cwd: A }) {
          return e && t
            ? p.npmConfigUtils.getScopeRegistry(e, {
                configuration: r,
                type: p.npmConfigUtils.RegistryType.PUBLISH_REGISTRY,
              })
            : e
            ? p.npmConfigUtils.getScopeRegistry(e, { configuration: r })
            : t
            ? p.npmConfigUtils.getPublishRegistry(
                (await (0, s.openWorkspace)(r, A)).manifest,
                { configuration: r }
              )
            : p.npmConfigUtils.getDefaultRegistry({ configuration: r })
        }
        ;(R.usage = d.Command.Usage({
          category: 'Npm-related commands',
          description: 'store new login info to access the npm registry',
          details:
            '\n      This command will ask you for your username, password, and 2FA One-Time-Password (when it applies). It will then modify your local configuration (in your home folder, never in the project itself) to reference the new tokens thus generated.\n\n      Adding the `-s,--scope` flag will cause the authentication to be done against whatever registry is configured for the associated scope (see also `npmScopes`).\n\n      Adding the `--publish` flag will cause the authentication to be done against the registry used when publishing the package (see also `publishConfig.registry` and `npmPublishRegistry`).\n    ',
          examples: [
            ['Login to the default registry', 'yarn npm login'],
            [
              'Login to the registry linked to the @my-scope registry',
              'yarn npm login --scope my-scope',
            ],
            [
              'Login to the publish registry for the current package',
              'yarn npm login --publish',
            ],
          ],
        })),
          (0, i.gn)(
            [
              d.Command.String('-s,--scope', {
                description:
                  'Login to the registry configured for a given scope',
              }),
            ],
            R.prototype,
            'scope',
            void 0
          ),
          (0, i.gn)(
            [
              d.Command.Boolean('--publish', {
                description: 'Login to the publish registry',
              }),
            ],
            R.prototype,
            'publish',
            void 0
          ),
          (0, i.gn)(
            [d.Command.Path('npm', 'login')],
            R.prototype,
            'execute',
            null
          )
        const L = new Set(['npmAuthIdent', 'npmAuthToken'])
        class P extends s.BaseCommand {
          constructor() {
            super(...arguments), (this.publish = !1), (this.all = !1)
          }
          async execute() {
            const e = await o.VK.find(this.context.cwd, this.context.plugins),
              t = async () => {
                var t
                const r = await x({
                    configuration: e,
                    cwd: this.context.cwd,
                    publish: this.publish,
                    scope: this.scope,
                  }),
                  A = await o.VK.find(this.context.cwd, this.context.plugins),
                  n = C.makeIdent(
                    null !== (t = this.scope) && void 0 !== t ? t : null,
                    'pkg'
                  )
                return !p.npmConfigUtils
                  .getAuthConfiguration(r, { configuration: A, ident: n })
                  .get('npmAuthToken')
              }
            return (
              await h.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async r => {
                  if (
                    (this.all &&
                      (await (async function () {
                        const e = e => {
                          let t = !1
                          const r = f.isIndexableObject(e) ? { ...e } : {}
                          r.npmAuthToken && (delete r.npmAuthToken, (t = !0))
                          for (const e of Object.keys(r)) O(r, e) && (t = !0)
                          if (0 !== Object.keys(r).length) return t ? r : e
                        }
                        return await o.VK.updateHomeConfiguration({
                          npmRegistries: e,
                          npmScopes: e,
                        })
                      })(),
                      r.reportInfo(
                        l.b.UNNAMED,
                        'Successfully logged out from everything'
                      )),
                    this.scope)
                  )
                    return (
                      await U('npmScopes', this.scope),
                      void ((await t())
                        ? r.reportInfo(
                            l.b.UNNAMED,
                            'Successfully logged out from ' + this.scope
                          )
                        : r.reportWarning(
                            l.b.UNNAMED,
                            'Scope authentication settings removed, but some other ones settings still apply to it'
                          ))
                    )
                  const A = await x({
                    configuration: e,
                    cwd: this.context.cwd,
                    publish: this.publish,
                  })
                  await U('npmRegistries', A),
                    (await t())
                      ? r.reportInfo(
                          l.b.UNNAMED,
                          'Successfully logged out from ' + A
                        )
                      : r.reportWarning(
                          l.b.UNNAMED,
                          'Registry authentication settings removed, but some other ones settings still apply to it'
                        )
                }
              )
            ).exitCode()
          }
        }
        function O(e, t) {
          const r = e[t]
          if (!f.isIndexableObject(r)) return !1
          const A = new Set(Object.keys(r))
          if ([...L].every(e => !A.has(e))) return !1
          for (const e of L) A.delete(e)
          if (0 === A.size) return (e[t] = void 0), !0
          const n = { ...r }
          for (const e of L) delete n[e]
          return (e[t] = n), !0
        }
        async function U(e, t) {
          return await o.VK.updateHomeConfiguration({
            [e]: e => {
              const r = f.isIndexableObject(e) ? e : {}
              if (!Object.prototype.hasOwnProperty.call(r, t)) return e
              const A = r[t],
                n = f.isIndexableObject(A) ? A : {},
                o = new Set(Object.keys(n))
              if ([...L].every(e => !o.has(e))) return e
              for (const e of L) o.delete(e)
              if (0 === o.size) {
                if (1 === Object.keys(r).length) return
                return { ...r, [t]: void 0 }
              }
              const i = {}
              for (const e of L) i[e] = void 0
              return { ...r, [t]: { ...n, ...i } }
            },
          })
        }
        ;(P.usage = d.Command.Usage({
          category: 'Npm-related commands',
          description: 'logout of the npm registry',
          details:
            '\n      This command will log you out by modifying your local configuration (in your home folder, never in the project itself) to delete all credentials linked to a registry.\n\n      Adding the `-s,--scope` flag will cause the deletion to be done against whatever registry is configured for the associated scope (see also `npmScopes`).\n\n      Adding the `--publish` flag will cause the deletion to be done against the registry used when publishing the package (see also `publishConfig.registry` and `npmPublishRegistry`).\n\n      Adding the `-A,--all` flag will cause the deletion to be done against all registries and scopes.\n    ',
          examples: [
            ['Logout of the default registry', 'yarn npm logout'],
            [
              'Logout of the @my-scope scope',
              'yarn npm logout --scope my-scope',
            ],
            [
              'Logout of the publish registry for the current package',
              'yarn npm logout --publish',
            ],
            ['Logout of all registries', 'yarn npm logout --all'],
          ],
        })),
          (0, i.gn)(
            [
              d.Command.String('-s,--scope', {
                description:
                  'Logout of the registry configured for a given scope',
              }),
            ],
            P.prototype,
            'scope',
            void 0
          ),
          (0, i.gn)(
            [
              d.Command.Boolean('--publish', {
                description: 'Logout of the publish registry',
              }),
            ],
            P.prototype,
            'publish',
            void 0
          ),
          (0, i.gn)(
            [
              d.Command.Boolean('-A,--all', {
                description: 'Logout of all registries',
              }),
            ],
            P.prototype,
            'all',
            void 0
          ),
          (0, i.gn)(
            [d.Command.Path('npm', 'logout')],
            P.prototype,
            'execute',
            null
          )
        var T = r(63088),
          j = r(49881)
        class Y extends s.BaseCommand {
          constructor() {
            super(...arguments),
              (this.tag = 'latest'),
              (this.tolerateRepublish = !1)
          }
          async execute() {
            const e = await o.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await a.I.find(e, this.context.cwd)
            if (!r) throw new s.WorkspaceRequiredError(t.cwd, this.context.cwd)
            if (r.manifest.private)
              throw new d.UsageError('Private workspaces cannot be published')
            if (null === r.manifest.name || null === r.manifest.version)
              throw new d.UsageError(
                'Workspaces must have valid names and versions to be published on an external registry'
              )
            await t.restoreInstallState()
            const A = r.manifest.name,
              n = r.manifest.version,
              i = p.npmConfigUtils.getPublishRegistry(r.manifest, {
                configuration: e,
              })
            return (
              await h.Pk.start(
                { configuration: e, stdout: this.context.stdout },
                async t => {
                  if (this.tolerateRepublish)
                    try {
                      const r = await p.npmHttpUtils.get(
                        p.npmHttpUtils.getIdentUrl(A),
                        {
                          configuration: e,
                          registry: i,
                          ident: A,
                          jsonResponse: !0,
                        }
                      )
                      if (!Object.prototype.hasOwnProperty.call(r, 'versions'))
                        throw new g.lk(
                          l.b.REMOTE_INVALID,
                          'Registry returned invalid data for - missing "versions" field'
                        )
                      if (Object.prototype.hasOwnProperty.call(r.versions, n))
                        return void t.reportWarning(
                          l.b.UNNAMED,
                          `Registry already knows about version ${n}; skipping.`
                        )
                    } catch (e) {
                      if ('HTTPError' !== e.name) throw e
                      if (404 !== e.response.statusCode)
                        throw new g.lk(
                          l.b.NETWORK_ERROR,
                          `The remote server answered with HTTP ${e.response.statusCode} ${e.response.statusMessage}`
                        )
                    }
                  await T.maybeExecuteWorkspaceLifecycleScript(
                    r,
                    'prepublish',
                    { report: t }
                  ),
                    await j.packUtils.prepareForPack(
                      r,
                      { report: t },
                      async () => {
                        const n = await j.packUtils.genPackList(r)
                        for (const e of n) t.reportInfo(null, e)
                        const o = await j.packUtils.genPackStream(r, n),
                          s = await f.bufferStream(o),
                          a = await p.npmPublishUtils.makePublishBody(r, s, {
                            access: this.access,
                            tag: this.tag,
                            registry: i,
                          })
                        try {
                          await p.npmHttpUtils.put(
                            p.npmHttpUtils.getIdentUrl(A),
                            a,
                            {
                              configuration: e,
                              registry: i,
                              ident: A,
                              jsonResponse: !0,
                            }
                          )
                        } catch (e) {
                          if ('HTTPError' !== e.name) throw e
                          {
                            const r =
                              e.response.body && e.response.body.error
                                ? e.response.body.error
                                : `The remote server answered with HTTP ${e.response.statusCode} ${e.response.statusMessage}`
                            t.reportError(l.b.NETWORK_ERROR, r)
                          }
                        }
                      }
                    ),
                    t.hasErrors() ||
                      t.reportInfo(l.b.UNNAMED, 'Package archive published')
                }
              )
            ).exitCode()
          }
        }
        ;(Y.usage = d.Command.Usage({
          category: 'Npm-related commands',
          description: 'publish the active workspace to the npm registry',
          details:
            '\n      This command will pack the active workspace into a fresh archive and upload it to the npm registry.\n\n      The package will by default be attached to the `latest` tag on the registry, but this behavior can be overriden by using the `--tag` option.\n\n      Note that for legacy reasons scoped packages are by default published with an access set to `restricted` (aka "private packages"). This requires you to register for a paid npm plan. In case you simply wish to publish a public scoped package to the registry (for free), just add the `--access public` flag. This behavior can be enabled by default through the `npmPublishAccess` settings.\n    ',
          examples: [['Publish the active workspace', 'yarn npm publish']],
        })),
          (0, i.gn)(
            [
              d.Command.String('--access', {
                description:
                  'The access for the published package (public or restricted)',
              }),
            ],
            Y.prototype,
            'access',
            void 0
          ),
          (0, i.gn)(
            [
              d.Command.String('--tag', {
                description:
                  'The tag on the registry that the package should be attached to',
              }),
            ],
            Y.prototype,
            'tag',
            void 0
          ),
          (0, i.gn)(
            [
              d.Command.Boolean('--tolerate-republish', {
                description:
                  'Warn and exit when republishing an already existing version of a package',
              }),
            ],
            Y.prototype,
            'tolerateRepublish',
            void 0
          ),
          (0, i.gn)(
            [d.Command.Path('npm', 'publish')],
            Y.prototype,
            'execute',
            null
          )
        var G = r(46009)
        class H extends s.BaseCommand {
          constructor() {
            super(...arguments), (this.json = !1)
          }
          async execute() {
            const e = await o.VK.find(this.context.cwd, this.context.plugins),
              { project: t, workspace: r } = await a.I.find(e, this.context.cwd)
            let A
            if (void 0 !== this.package) A = C.parseIdent(this.package)
            else {
              if (!r)
                throw new s.WorkspaceRequiredError(t.cwd, this.context.cwd)
              if (!r.manifest.name)
                throw new d.UsageError(
                  "Missing 'name' field in " + G.y1.join(r.cwd, G.QS.manifest)
                )
              A = r.manifest.name
            }
            const n = await J(A, e),
              i = {
                children: f
                  .sortMap(Object.entries(n), ([e]) => e)
                  .map(([e, t]) => ({
                    value: I.tuple(I.Type.RESOLUTION, {
                      descriptor: C.makeDescriptor(A, e),
                      locator: C.makeLocator(A, t),
                    }),
                  })),
              }
            })




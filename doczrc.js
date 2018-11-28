export default {
  title: 'QUARTZO',
  wrapper: '.docz/wrapper',
  files: './src/**/*.mdx',
  host: '0.0.0.0',
  port: 3000,
  codeSandbox: false,
  themeConfig: {
    showPlaygroundEditor: true,
    colors: {
      primary: '#ff59ad',
      sidebarBg: '#fff6f6',
      link: '#ff59ad',
    },
    styles: {
      body: {
        fontFamily: "'Lato', Helvetica, sans-serif",
        fontWeight: 300,
      },
      h1: {
        fontFamily: "'Pacifico', Helvetica, sans-serif",
        fontWeight: 400,
        color:'#917dff',
        fontSize: 50,
      },
      h2: {
        fontFamily: "'Lato', Helvetica, sans-serif",
        color:'#917dff',
        borderBottom: '1px dotted #ff59ad',
      },
      h3: {
        fontFamily: "'Lato', Helvetica, sans-serif",
      },
    },
  },
};

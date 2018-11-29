export default {
  title: 'QUARTZO',
  wrapper: '.docz/wrapper',
  files: './src/**/*.mdx',
  host: '0.0.0.0',
  port: 3000,
  codeSandbox: false,
  themeConfig: {
    showPlaygroundEditor: true,
    logo: {
      src: 'https://i.imgur.com/nARNlXO.png',
      width: 210,
    },
    colors: {
      primary: '#ff59ad',
      sidebarBg: '#fff6f6',
      link: '#ff59ad',
      sidebarText: '#666',
      sidebarBorder: '#ccc',
    },
    styles: {
      container: { margin: 0 },
      body: {
        fontFamily: "'Lato', Helvetica, sans-serif",
        fontWeight: 300,
      },
      h1: {
        fontFamily: "'Pacifico', Helvetica, sans-serif",
        fontWeight: 400,
        fontSize: 60,
        color:'#917dff',
      },
      h2: {
        fontFamily: "'Lato', Helvetica, sans-serif",
        color:'#917dff',
        fontWeight: 700,
        borderBottom: '1px dotted #ff59ad',
      },
      h3: {
        fontFamily: "'Lato', Helvetica, sans-serif",
        color:'#917dff',
        borderBottom: '1px dotted #ff59ad',
        marginBottom: 30,
        fontWeight: 700,
        fontSize: 24,
      },
    },
  },
};

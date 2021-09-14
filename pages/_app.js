import React from "react"
import App from 'next/app'
import Header from "./../components/header"
import Footer from "./../components/footer"
import "./../static/styles/main.css"

class MyApp extends App {
  constructor(props) {
    super(props)
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  componentDidMount() {
    // Google analytics code here.
    // ReactGA.initialize('UA-110480402-6');
    // ReactGA.pageview(window.location.pathname + window.location.search);
    // Router.events.on('routeChangeComplete', () => { window.scrollTo(0, 0); })
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </>
  )
  }
}

export default MyApp

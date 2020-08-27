import React from "react";

export default class NavBar extends React.Component {
  state = {
    links: [
      { target: "http://www.google.com", label: "hello1" },
      { target: "http://www.facebook.com", label: "hello2" },
      { target: "http://www.twitter.com", label: "hello3" },
    ],
  };
  //   ------------
  // --------------
  render() {
    return (
      <React.Fragment>
        <header className="navBar">
          <h2 className="logo">ICE ICE baby</h2>
          <nav>
            <ul>
              {this.state.links.map((link) => (
                <li>
                  <a
                    href={link.target}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hello 1
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>
      </React.Fragment>
    );
  }
}

/*

Tag rel with "noopener" and "noreferrer" combined means that no referrer 
information should be passed to the website being linked to because of 
noreferrer tag and also prevents the newly opened page
 from controlling the page that delivered the traffic.

https://web.dev/external-anchors-use-rel-noopener/
*/

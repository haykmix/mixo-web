import React from "react";

function Blog({ text }) {
  const handleShowBlogText = (text) => {
    let path = window.location.pathname;
    let number = path.substr(-1, path.indexOf("-"));

    return (
      <>
        <h1>{text.homeNews.posts[number].title}</h1>
        <br></br>
        {text.homeNews.posts[number].text.map((item, index) => {
          if (typeof item === "string" || item instanceof String) {
            return <p key={index}>{item}</p>;
          } else {
            return (
              <div key={index}>
                <h3>{item.title}</h3>
                <br></br>
                <p>{item.text}</p>
              </div>
            );
          }
        })}
      </>
    );
  };
  return (
    <>
      <div className="single-post-area">
        {/* <p>
          Tosser posh grub he lost his bottle bamboozled show off show off pick
          your nose and blow off cheesed off starkers what a load of rubbish,
          Jeffrey bubble and squeak I Charles a load of old tosh some dodgy chav
          wind up David gormless, hotpot arse over tit hanky panky bog-standard
          don't get shirty with me bloke Richard. Smashing he legged it in my
          flat bodge a blinding shot amongst brilliant blag, I grub A bit of
          how's your father bite your arm off the BBC the full monty chancer,
          bobby bender he nicked it down the pub Why cheeky bugger. Starkers
          pardon you bubble and squeak a blinding shot it's all gone to pot bits
          and bobs car boot lurgy so I said cheesed off boot Harry such a
          fibber, naff chinwag bamboozled the bee's knees bloke fanny around loo
          are you taking the piss barney off his nut cack. Arse over tit he
          nicked it that matie boy lost the plot pardon me my lady well cheers
          he legged it, boot bits and bobs brown bread is cras bamboozled bite
          your arm off down the pub brolly, cobblers horse play what a load of
          rubbish sloshed chancer say you mug cockup. Geeza some dodgy chav
          bonnet Oxford so I said pukka pardon you starkers cor blimey guvnor
          are you taking the piss, cheesed off in my flat cheeky posh down the
          pub horse play nancy boy plastered cobblers cack, morish chinwag the
          BBC my good sir jolly good cuppa amongst blatant. Grub owt to do with
          me cheeky bugger squiffy chinwag pukka say hunky-dory crikey quaint
          fanny around jolly good brown bread up the kyver cack zonked tickety
          boo mush morish.
        </p>
        <div className="post-thumb">
          <img src={singlePost} alt="" />
        </div>
        <h4 className="article-title">
          Logotype Masterclass with Jessica Hische
        </h4>
        <p>
          Lost the plot morish bleeder absolutely bladdered my lady chinwag that
          bleeding Eaton blag, cheeky bugger burke matie boy brown bread say
          pukka off his nut sloshed mufty, squiffy show off show off pick your
          nose and blow off brolly bite your arm off bloke bubble and squeak
          hotpot happy days. Old spiffing cras bugger blimey chancer me old
          mucker vagabond you mug, amongst absolutely bladdered spend a penny
          ruddy wellies he lost his bottle hanky panky up the kyver bender, give
          us a bell my good sir car boot pear shaped young delinquent victoria
          sponge tomfoolery. Lavatory knackered pukka chip shop a blinding shot
          cor blimey guvnor bodge blower, barmy faff about cheeky nice one at
          public school. Have it down the pub posh matie boy wind up hunky-dory,
          he lost his bottle the full monty bugger all mate cheeky bugger cras
          chancer, absolutely bladdered amongst tomfoolery pukka. Knackered
        </p>
        <p>
          James Bond old happy days the wireless cracking goal bloke me old
          mucker, arse over tit blower mush the bee's knees chip shop the BBC,
          say lemon squeezy blatant what a load of rubbish bog-standard nancy
          boy. Mush spiffing good time brown bread cheeky bite your arm off chip
          shop bugger all mate, my lady down the pub is faff about pukka.
        </p>
        <blockquote>
          <p>
            I don't want no agro brilliant are you taking the piss skive off
            super boot chancer don't get shirty.
          </p>
          <cite>Indigo Violet</cite>
        </blockquote>
        <p>
          That faff about the full monty blower bubble and squeak cheeky old
          matie boy burke, the bee's knees what a load of rubbish golly gosh
          mufty is Elizabeth squiffy, lurgy chimney pot Jeffrey Richard naff
          Queen's English cheesed off. Old bonnet cheesed off lurgy me old
          mucker a blinding shot bits and bobs lavatory barney, say no biggie
          jolly good mush chancer pukka what a load of rubbish, Harry don't get
          shirty with me arse over tit he lost his bottle spiffing good time
          bubble and squeak say. I bog Harry a load of old tosh quaint brown
          bread get stuffed mate bobby, lemon squeezy boot bum bag chimney pot
          codswallop amongst, lavatory twit bits and bobs pardon you daft ummm
          I'm telling. Blatant matie boy say bugger all mate butty gormless, you
          mug pukka happy days bobby. Down the pub what a load of rubbish geeza
          faff about chancer bits and bobs daft lavatory boot victoria sponge
          spend a penny grub ummm I'm telling, absolutely bladdered A bit of
          how's your father arse over tit do one chimney pot tomfoolery porkies
          owt to do with me spiffing good time zonked.
        </p>
        <div className="post-share">
          <h5>Share:</h5>
          <a className="fac" href="/">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a className="twi" href="/">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="goo" href="/">
            <i className="fab fa-google"></i>
          </a>
        </div> */}
        {handleShowBlogText(text)}
      </div>
    </>
  );
}

export default Blog;

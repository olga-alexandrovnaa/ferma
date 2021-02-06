import React    from 'react';
import {SectionsContainer, Section, Header, Footer} from 'react-fullpage';
import Navbar from './navbar'
import BottomBar from './BottomBar'
import Welcome from './Welcome'
import Meat from './Meat'
import Chicken from './Chicken'
import Egg from './Egg'
import AboutUs from './AboutUs'
import Basket from './Basket'
import Delivery from './Delivery'

class Client extends React.Component {
  constructor(props) {
    super(props);
    //this.user = props.user;
    this.products = props.products;
  }

  render() {
    let options = {
      sectionClassName:     'section',
      anchors:              ['sectionOne', 'sectionTwo', 'sectionThree', 'section4', 'section5', 'section6', 'section7', 'section8'],
      scrollBar:            false,
      navigation:           true,
      verticalAlign:        false,
      sectionPaddingTop:    '50px',
      sectionPaddingBottom: '50px',
      arrowNavigation:      true
    };

    return (
      <div>
        <Header>
          <Navbar/>
        </Header>
        <Footer>
            <BottomBar/>
        </Footer>
        <SectionsContainer {...options}>

          <Section>
            <Welcome/>
          </Section>

          <Section >
            <Meat products={this.products}/>
            <div>
              ID {this.products.type_id}
            </div>
          </Section>

          <Section >
          <Egg products={this.products}/>
            
          </Section>

          <Section >
          <Chicken products={this.products}/>
          </Section>

          <Section>
          <AboutUs/>
          </Section>

          <Section >
              <Basket/>
          </Section>

          <Section >
            <Delivery/>
          </Section>

          <Section >
            
          <section class="map">
    <div class="container" style = {{margin: "50px 34%"}}>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d32258.337946689833!2d33.483660308795464!3d59.64721783336047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46bca272179872fd%3A0xc925024d0b0ac69b!2z0KLQuNGF0LLQuNC9LCDQm9C10L3QuNC90LPRgNCw0LTRgdC60LDRjyDQvtCx0Lsu!5e0!3m2!1sru!2sru!4v1610746582244!5m2!1sru!2sru" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
</section>

          </Section>

        </SectionsContainer>
      </div>
    );
  }
}

export default Client;


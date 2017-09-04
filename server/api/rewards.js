import { Router } from 'express'

const router = Router()

// Mock Users
const rewards = [
  { id: 0, name: 'Heineken', image_url: '/beers/heineken.jpeg', quantity: 5, description: `Heineken Lager Beer (Dutch: Heineken Pilsener), or simply Heineken (Dutch pronunciation: [ˈɦɛinəkən]) is a pale lager beer with 5% alcohol by volume produced by the Dutch brewing company Heineken International. Heineken is well known for its signature green bottle and red star.`},
  { id: 1, name: 'Kaiserdom', image_url: '/beers/kaiserdom.jpeg', quantity: 5, description: `The brewery was founded in 1718 by Georg Morg. Since 1910, it has been managed by the Wörner family. In 1953, they brewed 6,000 hectoliters. The production today is about 250,000 hectolitres. It is the biggest brewery in Bamberg.` },
  { id: 2, name: 'Peroni', image_url: '/beers/peroni.jpeg', quantity: 5, description: `Peroni is the Peroni company\'s original brand. According to Assobirra, it is the best selling beer in Italy. It is 4.7% abv and made with barley malt, maize, hop pellets and hop extract. By the 1950s and 1960s, Peroni was the most recognized brand of beer throughout the Italian peninsula.` },
  { id: 3, name: 'Bintang', image_url: '/beers/bintang.jpeg', quantity: 5, description: `The beer is styled as a pale lager, gold in colour with an ideal serving temperature of 7 °C. The 4.7% ABV Pilsner has a malt and hop flavour. Due to the fact that it is a localized version of Heineken, its taste is similar and comparable to Heineken, and the Bintang bottle is reminiscent of a Heineken bottle; the red star on the bottle is the same as Heineken. Bintang makes a malt based beverage called Bintang Zero 0.0%, a low alcohol Radler called Bintang Radler (in both lemon and grapefruit flavours) 2.0%, a soft drink product called Green Sands.` },
  { id: 4, name: 'Goose IPA', image_url: '/beers/goose_ipa.jpeg', quantity: 5, description: `Goose Island produces a number of beers that are available year-round, as well as some beers that are seasonal. At different times in the past, the brewery has produced dozens of other beers.
  
  In November 2008, Goose Island made news when its small batch of Bourbon County Stout became available for the first time in Western states.
  
  While Goose Island products were originally only available in the Chicago area, their products are now available in all 50 states.`},
  { id: 5, name: 'Coors Light', image_url: '/beers/coors_light.jpeg', quantity: 5, description: `Coors Light is a 4.2% ABV light beer brewed in Golden, Colorado and Milwaukee, Wisconsin. It was first produced in 1978 by the Coors Brewing Company.
  
  The beer has a "Cold Certified" label which turns the mountains on the label from white to blue when the beer's temperature is lowered to 39 degrees fahrenheit. Coors Light has a "mountain icon" to represent the beer in place of the logo. The icon is a stylized drawing of a mountain with two peaks.`}
]

/* GET rewards listing. */
router.get('/rewards', function (req, res, next) {
  res.json(rewards)
})

/* GET reward by ID. */
router.get('/rewards/:id', function (req, res, next) {
  const id = parseInt(req.params.id)
  let _reward = rewards.find((reward)=>reward.id===id);
  if(_reward){
    res.json(_reward)
  } else {
    res.sendStatus(404)
  }
})

export default router

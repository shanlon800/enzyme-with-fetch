// import VegetableIndexContainer from '../../../app/javascript/containers/VegetableIndexContainer'
// import VegetableTile from '../../../app/javascript/components/VegetableTile'
// const fetchMock = require('fetch-mock')
// // require('isomorphic-fetch')
// // require('fetchMock')
//
// describe('VegetableIndexContainer', () => {
//   let wrapper,
//   wrapper2,
//    food;
//
//   beforeEach(() => {
//     jasmineEnzyme();
//     wrapper = mount(
//       <VegetableIndexContainer
//       />
//     );
//     wrapper2 = mount(
//       <VegetableTile
//       />
//     )
//     food = [
//       {id: 1, name: 'Carrot'}
//     ]
//     fetchMock.get('/api/v1/vegetables', {
//       status: 200,
//       body: food
//     });
//
//     // wrapper = mount(
//     //   <VegetableIndexContainer />
//     // )
//   })
//
//   afterEach(fetchMock.restore)
//
//   describe('listing', () => {
//     it('renders an h2', () => {
//       expect(wrapper.find('h2')).toBePresent()
//       expect(wrapper.find('h2').text()).toEqual('Vegetable Index Container')
//     })
//
//     it('renders a list item for each item returned from the api call', (done) => {
//       setTimeout(() => {
//         expect(wrapper.find('li').length).toEqual(food.length)
//         expect(wrapper.find('li').text()).toEqual(food[0].name)
//         done()
//       }, 0)
//     })
//   })
//
//
//
// })

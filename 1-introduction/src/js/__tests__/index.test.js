import App from '../__stories__/index.stories';

describe('<App />', () => {
    describe('Snaphot', () => {
        test('should match default', () => {
            expect(global.renderToJSON(App)).toMatchSnapshot();
        });
    });
});

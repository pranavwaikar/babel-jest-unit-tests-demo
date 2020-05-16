import {$imports} from '../../src/Car';
import Car from '../../src/Car';

describe('Class Car',()=>{
    let CarObject;
    let MusicPlayerMock;
    beforeAll(()=>{
        MusicPlayerMock = jest.fn().mockReturnValue('This is mock value for Music player');

        $imports.$mock({
            './lib/MusicPlayer':MusicPlayerMock
          });
    });

    beforeEach(() => {
        CarObject = new Car('foo','bar','baz');
    });

    describe('#constructor',()=>{
        it('should create a new object with correct data members',() => {
           expect(CarObject.RegistrationNumber).toBe('foo');
           expect(CarObject.Manufactorer).toBe('bar');
           expect(CarObject.Model).toBe('baz');
        });
    });

    describe('#drive',()=>{
        it('should give desired driving message',() => {
           expect(CarObject.drive()).toBe('Driving: RegistrationNumber=foo, Manufactorer=bar, Model=baz');
        });
    });

    describe('#playMusic',()=>{
        it('should give desired driving message',() => {
           expect(CarObject.playMusic).toBe('This is mock value for Music player');
        });
    });
});
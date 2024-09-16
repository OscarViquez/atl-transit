import { BROWSER_AGENT, BROWSER_PERMISSION_STATE } from '../../constants/browser-api.constants';
import { DEFAULT_USER_GEO_POSITION_CONSTANT } from '../../constants/geolocation.constants';
import { TestBed } from '@angular/core/testing';
import { GeolocationService } from './geolocation.service';

describe('GeolocationService', () => {
  let service: GeolocationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeolocationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getUserLocation', () => {
    it('should return user location when permission is granted', async () => {
      spyOn(service, 'getBrowserLocationPermission').and.returnValue(
        Promise.resolve(BROWSER_PERMISSION_STATE.GRANTED)
      );
      spyOn(service, 'getCurrentUserPosition').and.returnValue(
        Promise.resolve({ latitude: 10, longitude: 20 })
      );

      const result = await service.getUserLocation();
      expect(result.location).toEqual({ latitude: 10, longitude: 20 });
    });

    it('should return default location and error message when permission is denied', async () => {
      spyOn(service, 'getBrowserLocationPermission').and.returnValue(
        Promise.resolve(BROWSER_PERMISSION_STATE.DENIED)
      );
      spyOn(service, 'getCurrentUserPosition').and.returnValue(
        Promise.resolve(DEFAULT_USER_GEO_POSITION_CONSTANT)
      );

      const result = await service.getUserLocation();
      expect(result.location).toEqual(DEFAULT_USER_GEO_POSITION_CONSTANT);
      expect(result.error).toBe(
        'Error getting user location. We have set your location to the default.'
      );
    });

    it('should return default location and error message when there is an error', async () => {
      spyOn(service, 'getBrowserLocationPermission').and.returnValue(Promise.reject('Error'));
      const result = await service.getUserLocation();
      expect(result.location).toEqual(DEFAULT_USER_GEO_POSITION_CONSTANT);
      expect(result.error).toBe(
        'Error getting user location. We have set your location to the default.'
      );
    });
  });
});

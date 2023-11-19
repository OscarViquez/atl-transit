import { IconPathPipe } from "./icon.pipe";


describe('IconPathPipe', () => {
   let pipe: IconPathPipe;

   beforeEach(() => {
      pipe = new IconPathPipe();
   });

   it('create an instance', () => {
      expect(pipe).toBeTruthy();
   });

   it('should return correct path without mode', () => {
      expect(pipe.transform('category', 'icon')).toEqual('/assets/icons/category/icon.svg');
   });

   it('should return correct path with mode', () => {
      expect(pipe.transform('category', 'icon', 'mode')).toEqual('/assets/icons/category/icon-mode.svg');
   });
});

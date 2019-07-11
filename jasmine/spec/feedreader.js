$(function() {

    describe('RSS Feeds', function(){

      it('are defined', function(){
        expect(allFeeds).toBeDefined();
        expect(allFeeds.length).not.toBe(0);
      });

     it('has a URL & the URL is not empty', function(){
       allFeeds.forEach(function(url){
         expect(url).toBeDefined();
         expect(url.length).not.toBe(0);
       });
     });

     it('has a name & name is not empty', function(){
       allFeeds.forEach(function(name){
         expect(name).toBeDefined();
         expect(name.length).not.toBe(0);
        });
      });
    });

  describe('The menu', function(){

   it('is hidden by defult', function (){
     expect(document.body.classList[0]).toBe('menu-hidden');
   });

    it('changes visibility to either hidden or visible when clicked', function(){

      let menuIcon = document.querySelector('.icon-list');
      menuIcon.click();
      expect(document.body.classList.contains('menu-hidden')).toBe(false);

      menuIcon.click();
      expect(document.body.classList.contains('menu-hidden')).toBe(true);

    });
  });

  describe('Initial Entries', function(){

   beforeEach(function(done){
     loadFeed(0, done);
   });

   it('has entries within the .feed container', function(){
     const feedList = document.querySelector('.feed');
     const entryList = feedList.querySelectorAll('.entry');

     expect(entryList.length).toBeGreaterThan(0);
    });
  });

  describe('Feed Selection', function(){

     let feedOne;
     let feedTwo;

     beforeEach(function(done){

       loadFeed(0, function(){
         feedOne = document.querySelector('.feed').innerHTML;

       loadFeed(1, function(){
         feedTwo = document.querySelector('.feed').innerHTML;
         done();
        });
       });
     });

     afterEach(function(){
       loadFeed(0);
     });

    it('loads a new feed', function(){
      expect(feedOne).not.toBe(feedTwo);
    });
  });
}());

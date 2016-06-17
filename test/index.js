var request = require('supertest');

describe('loading express', function () {

  var server;

  beforeEach(function () {
    server = require('../server.js');
  });

  afterEach(function () {
    server.close();
  });

  var test_urls = ['/','/about','/about/secret'];

  test_urls.forEach(function(url) {
    it('responds to index page '+url, function testSlash(done) {
        request(server)
          .get(url)
          .expect(200,done);
    });
  });

  it('404 on other pages', function testPath(done) {
    request(server)
      .get('/foo/bar/404.yyy')
      .expect(404, done);
  });

});

/*
 * node-sonic-channel
 *
 * Copyright 2019, Valerian Saliou
 * Author: Valerian Saliou <valerian@valeriansaliou.name>
 */


"use strict";


var SonicChannelSearch = require("../").Search;

var assert = require("assert");


describe("node-sonic-channel", function() {
  describe("constructor", function() {
    it("should succeed creating an instance with valid options", function() {
      assert.doesNotThrow(
        function() {
          new SonicChannelSearch({
            host                : "::1",
            port                : 1491,
            offlineStackMaxSize : 0
          });
        },

        "SonicChannelSearch should not throw on valid options"
      );
    });

    it("should fail creating an instance with missing host", function() {
      assert.throws(
        function() {
          new SonicChannelSearch({
            port : 1491
          });
        },

        "SonicChannelSearch should throw on missing host"
      );
    });

    it("should fail creating an instance with missing port", function() {
      assert.throws(
        function() {
          new SonicChannelSearch({
            host : "::1"
          });
        },

        "SonicChannelSearch should throw on missing port"
      );
    });

    it("should fail creating an instance with invalid port", function() {
      assert.throws(
        function() {
          new SonicChannelSearch({
            host : "::1",
            port : -40
          });
        },

        "SonicChannelSearch should throw on invalid port"
      );
    });

    it("should fail creating an instance with invalid offlineStackMaxSize",
      function() {
        assert.throws(
          function() {
            new SonicChannelSearch({
              host                : "::1",
              port                : 1491,
              offlineStackMaxSize : "20"
            });
          },

          "SonicChannelSearch should throw on invalid offlineStackMaxSize"
        );
      }
    );
  });

  // TODO: test command methods + handlers

  describe("close method", function() {
    it("should not close twice already closed channel", function() {
      var sonicChannelSearch = new SonicChannelSearch({
        host : "::1",
        port : 1491
      });

      assert.ok(
        !(sonicChannelSearch.close()), "Channel close should not be executed"
      );
    });
  });
});

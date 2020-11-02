dmx.config({
  "index": {
    "Courses": [
      {
        "type": "object",
        "name": "data",
        "sub": [
          {
            "type": "array",
            "name": "results",
            "sub": [
              {
                "type": "text",
                "name": "blocks_url"
              },
              {
                "type": "text",
                "name": "effort"
              },
              {
                "type": "text",
                "name": "end"
              },
              {
                "type": "text",
                "name": "enrollment_start"
              },
              {
                "type": "text",
                "name": "enrollment_end"
              },
              {
                "type": "text",
                "name": "id"
              },
              {
                "type": "key_array",
                "name": "media",
                "sub": [
                  {
                    "type": "text",
                    "name": "uri"
                  }
                ]
              },
              {
                "type": "text",
                "name": "name"
              },
              {
                "type": "text",
                "name": "number"
              },
              {
                "type": "text",
                "name": "org"
              },
              {
                "type": "text",
                "name": "short_description"
              },
              {
                "type": "text",
                "name": "start"
              },
              {
                "type": "text",
                "name": "start_display"
              },
              {
                "type": "text",
                "name": "start_type"
              },
              {
                "type": "text",
                "name": "pacing"
              },
              {
                "type": "boolean",
                "name": "mobile_available"
              },
              {
                "type": "boolean",
                "name": "hidden"
              },
              {
                "type": "boolean",
                "name": "invitation_only"
              },
              {
                "type": "text",
                "name": "course_id"
              }
            ]
          },
          {
            "type": "object",
            "name": "pagination",
            "sub": [
              {
                "type": "text",
                "name": "previous"
              },
              {
                "type": "number",
                "name": "num_pages"
              },
              {
                "type": "number",
                "name": "count"
              },
              {
                "type": "text",
                "name": "next"
              }
            ]
          }
        ]
      },
      {
        "type": "object",
        "name": "headers",
        "sub": [
          {
            "type": "text",
            "name": "allow"
          },
          {
            "type": "text",
            "name": "connection"
          },
          {
            "type": "text",
            "name": "content-language"
          },
          {
            "type": "text",
            "name": "content-length"
          },
          {
            "type": "text",
            "name": "content-type"
          },
          {
            "type": "text",
            "name": "date"
          },
          {
            "type": "text",
            "name": "server"
          },
          {
            "type": "text",
            "name": "vary"
          },
          {
            "type": "text",
            "name": "x-frame-options"
          }
        ]
      }
    ],
    "repeat1": {
      "meta": null,
      "outputType": "text"
    }
  }
});

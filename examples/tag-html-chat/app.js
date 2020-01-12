import { html } from 'tag-html'
const template = (title) => html`<html>
  <head>
    <title>${title}</title>
  </head>
  <body>
    <!-- 
        Legacy
        <can-import from="bootstrap/less/bootstrap.less" />

        <can-import from="~/styles.less" />
            <link rel="stylesheet/less" type="text/css" href="styles.less">
    <script src="less.js" type="text/javascript"></script>
        <can-import from="~/app" export-as="viewModel" route-data="routeData" />
        exporting is not needed in the index file we can nativ export
    -->


    <div class="container">
      <div class="row">
        <div class="col-sm-8 col-sm-offset-2">
          <h1 class="page-header text-center">
            <img src="https://donejs.com/static/img/donejs-logo-white.svg"
                alt="DoneJS logo" style="width: 100%;" />
            <br>Chat
          </h1>
        </div>
      </div>
    </div>
    <!-- we don't need a loader but thats what it would look like 
    ${NODE_ENV === "production"
    ? html`<script src="{{joinBase('steal.production.js')}}"></script>`
    : html`<script src="/node_modules/steal/steal.js" main></script>`}
    -->
  </body>
</html>`
export const app = {}
import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

/**
 * Initialization data for the jupyterlab_admonitions extension.
 */
const extension: JupyterFrontEndPlugin<void> = {
  id: 'jupyterlab_admonitions:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd) => {
    console.log('JupyterLab extension jupyterlab_admonitions is activated!');
  }
};

export default extension;

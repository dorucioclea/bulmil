import { newSpecPage } from '@stencil/core/testing';
import { File } from './file';

it('Should render properly', async (): Promise<void> => {
  const page = await newSpecPage({
    components: [File],
    html: `<b-file name="upload" size="is-small" color="is-black"></b-file>`,
  });

  expect(page.root).toEqualHtml(`
    <b-file name="upload" size="is-small" color="is-black">
      <div class="file is-small is-black">
        <label class="file-label">
          <input class="file-input" type="file" name="upload" />
          <span class="file-cta">
            <span class="file-icon">
              <i class="fas fa-upload"></i>
            </span>
            <span class="file-label">Choose a file…</span>
          </span>
        </label>
      </div>
    </b-file>
  `);
});

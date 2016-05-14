import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { ContainerAppComponent } from '../app/container.component';

beforeEachProviders(() => [ContainerAppComponent]);

describe('App: Container', () => {
  it('should create the app',
      inject([ContainerAppComponent], (app: ContainerAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'container works!\'',
      inject([ContainerAppComponent], (app: ContainerAppComponent) => {
    expect(app.title).toEqual('container works!');
  }));
});

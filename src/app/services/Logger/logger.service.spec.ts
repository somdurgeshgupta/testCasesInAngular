import { TestBed } from '@angular/core/testing';

import { LoggerService } from './logger.service';

describe('LoggerService', () => {
  let service: LoggerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoggerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should not have any messages at starting', ()=>{
    const service  = new LoggerService();
    let count = service.messeges.length;
    expect(count).toBe(0);
  });

  it('should add the messages when log is called',()=>{
    const service  = new LoggerService();
    service.log('message');
    expect(service.messeges.length).toBe(1);
  });

  it('should clear all the messages when clear is called', ()=>{
    const service  = new LoggerService();
    service.log('message');
    service.clear();
    expect(service.messeges.length).toBe(0);
  })
});

import { TestBed } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';
import { LoggerService } from '../Logger/logger.service';

describe('CalculatorService', () => {
  let calculator: CalculatorService;
  let mockLoggerService:any;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    calculator = TestBed.inject(CalculatorService);

    mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    calculator =  new CalculatorService(mockLoggerService);
  });

  it('should be created', () => {
    expect(calculator).toBeTruthy();
  });

  it('should add two numbers', ()=>{
    
    let result = calculator.add(2,2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1); 
  });

  it('should subtract two numbers', ()=>{
    // let loggerService = new LoggerService();
    let mockLoggerService = jasmine.createSpyObj('LoggerService', ['log']);
    // spyOn(loggerService, 'log');
    const calculator =  new CalculatorService(mockLoggerService);
    let result = calculator.subtract(6,2);
    expect(result).toBe(4);
    expect(mockLoggerService.log).toHaveBeenCalledTimes(1); 
  });
});

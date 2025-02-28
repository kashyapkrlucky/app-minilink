const { format } = require('winston');
const logger = require('../utils/logger'); // Adjust the path accordingly

jest.mock('winston', () => ({
    createLogger: jest.fn().mockReturnValue({
        info: jest.fn(),
        error: jest.fn(),
        warn: jest.fn(),
        debug: jest.fn(),
    }),
    format: {
        combine: jest.fn(),
        timestamp: jest.fn(),
        printf: jest.fn().mockImplementation((callback) => callback),
        colorize: jest.fn(),
        simple: jest.fn(),
    },
    transports: {
        Console: jest.fn(),
        File: jest.fn(),
    },
}));

jest.mock('../utils/chalkUtils', () => ({
    chalkStyles: {
        error: jest.fn((msg) => `error: ${msg}`),
        warning: jest.fn((msg) => `warning: ${msg}`),
        info: jest.fn((msg) => `info: ${msg}`),
        success: jest.fn((msg) => `success: ${msg}`),
        debug: jest.fn((msg) => `debug: ${msg}`),
    },
}));

describe('Logger Configuration', () => {
    it('should call the custom formatter with the correct styles', () => {
        const mockInfo = { level: 'info', message: 'test message', timestamp: '2021-01-01T00:00:00Z' };
        const mockError = { level: 'error', message: 'test error', timestamp: '2021-01-01T00:00:00Z' };

        const customFormat = format.printf.mock.calls[0][0];
        const formattedInfo = customFormat(mockInfo);
        const formattedError = customFormat(mockError);

        expect(formattedInfo).toBe('2021-01-01T00:00:00Z [info]: info: test message');
        expect(formattedError).toBe('2021-01-01T00:00:00Z [error]: error: test error');
    });

    it('should log messages correctly', () => {
        logger.info('test info');
        logger.error('test error');
        logger.warn('test warning');
        logger.debug('test debug');

        expect(logger.info).toHaveBeenCalledWith('test info');
        expect(logger.error).toHaveBeenCalledWith('test error');
        expect(logger.warn).toHaveBeenCalledWith('test warning');
        expect(logger.debug).toHaveBeenCalledWith('test debug');
    });
});
